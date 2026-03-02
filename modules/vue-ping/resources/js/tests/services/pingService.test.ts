import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { createApp } from 'vue';
import { PingService } from '../../services/pingService';

test('usePing', async () => {
    const app = createApp({});
    app.use(VueQueryPlugin, { queryClient: new QueryClient() });

    const pingRepositoryMock = {
        ping: vi.fn().mockResolvedValue('pong'),
    };

    const pingQuery = app.runWithContext(function () {
        return new PingService(pingRepositoryMock).usePing();
    });

    await pingQuery.fetch();

    expect(pingRepositoryMock.ping).toHaveBeenCalledOnce();
    expect(pingQuery.data).toBe('pong');
});
