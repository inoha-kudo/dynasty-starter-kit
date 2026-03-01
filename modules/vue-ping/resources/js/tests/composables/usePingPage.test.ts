import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { createApp, defineComponent } from 'vue';
import { usePingPage } from '../../composables/usePingPage';
import { pingRepositoryKey } from '../../injectionSymbols';

/**
 * ComposableをVueのコンテキスト内で実行するためのヘルパー
 */
function withSetup<T>(composable: () => T, provideValue?: any) {
    let result: T;
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
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
    if (provideValue) {
        app.provide(pingRepositoryKey, provideValue);
    }

    app.mount(document.createElement('div'));
    return [result!, app] as const;
}

describe('usePingPage', () => {
    it('リポジトリを注入し、fetchを実行するとデータが取得できること', async () => {
        // 1. Mockの準備
        const mockRepository = {
            ping: vi.fn().mockResolvedValue('pong'),
        };

        // 2. Composableの実行
        const [result] = withSetup(() => usePingPage(), mockRepository);

        // 3. 実行前の確認
        expect(result.ping.data).toBeUndefined();

        // 4. アクションの実行
        result.ping.fetch();

        // 5. 検証
        await vi.waitFor(() => {
            expect(result.ping.data).toBe('pong');
        });

        expect(mockRepository.ping).toHaveBeenCalledTimes(1);
    });
});
