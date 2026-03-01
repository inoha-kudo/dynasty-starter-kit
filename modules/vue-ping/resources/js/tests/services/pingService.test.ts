import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { createApp, defineComponent } from 'vue';
import { PingService } from '../../services/pingService';

/**
 * ServiceのComposableをVueのコンテキスト内で実行するためのヘルパー
 */
function withSetup<T>(composable: () => T) {
    let result: T;
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // テスト中はリトライを無効化してエラーテストを高速化する
                retry: false,
            },
        },
    });

    const app = createApp(
        defineComponent({
            setup() {
                result = composable();
                return () => {};
            },
        }),
    );

    app.use(VueQueryPlugin, { queryClient });
    app.mount(document.createElement('div'));

    return [result!, app] as const;
}

describe('PingService', () => {
    it('usePingがリアクティブなオブジェクトを返し、fetchでデータを取得できること', async () => {
        // 1. Mockリポジトリの準備
        const mockRepository = {
            ping: vi.fn().mockResolvedValue('pong'),
        };

        // 2. Serviceのインスタンス化
        const service = new PingService(mockRepository);

        // 3. Composableの取得と実行 (Vueコンテキスト内)
        const [ping] = withSetup(() => service.usePing());

        // 4. 初期状態の確認
        expect(ping.data).toBeUndefined();
        expect(ping.isFetching).toBe(false);

        // 5. アクションの実行
        ping.fetch();

        // 6. 検証
        await vi.waitFor(() => {
            expect(ping.data).toBe('pong');
        });

        expect(mockRepository.ping).toHaveBeenCalledTimes(1);
    });

    it('エラーが発生した場合、errorプロパティに保持されること', async () => {
        const error = new Error('Network Error');
        const mockRepository = {
            ping: vi.fn().mockRejectedValue(error),
        };

        const service = new PingService(mockRepository);
        const [ping] = withSetup(() => service.usePing());

        ping.fetch();

        await vi.waitFor(() => {
            expect(ping.error).toEqual(error);
        });
    });
});
