import PingTest from '@dynasty/ping/components/PingTest.vue';
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { render, screen, waitFor } from '@testing-library/vue';
import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';
import { server } from '../setup';

const createTestProps = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                gcTime: 0,
            },
        },
    });

    return {
        global: {
            plugins: [[VueQueryPlugin, { queryClient }]] as any,
        },
    };
};

describe('PingTest.vue', { timeout: 10000 }, () => {
    it('APIを呼び出してレスポンスを表示する', async () => {
        server.use(
            http.get('*/api/ping', () => {
                return HttpResponse.text('pong from test');
            }),
        );

        render(PingTest, createTestProps());

        expect(screen.getByText(/API Ping Test/i)).toBeDefined();

        await waitFor(
            () => {
                expect(screen.queryByText(/pong from test/i)).not.toBeNull();
            },
            { timeout: 3000 },
        );
    });

    it('エラー時にエラーメッセージを表示する', async () => {
        server.use(
            http.get('*/api/ping', () => {
                return new HttpResponse('Error', { status: 500 });
            }),
        );

        render(PingTest, createTestProps());

        // axios がエラーを投げると Vue Query が自動で3回リトライする。
        // リトライが終わるまで待機するか、QueryClient でリトライを無効化する。
        // 今回は waitFor のタイムアウトを延ばして対応を試みる。
        await waitFor(
            () => {
                expect(screen.queryByText(/Error:/i)).not.toBeNull();
            },
            { timeout: 8000 },
        );
    });
});
