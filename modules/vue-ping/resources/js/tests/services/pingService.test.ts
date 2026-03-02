import { useQuery } from '@tanstack/vue-query';
import { ref } from 'vue';
import { PingService } from '../../services/pingService';

vi.mock('@tanstack/vue-query', () => ({
    useQuery: vi.fn(),
}));

afterEach(() => {
    vi.resetAllMocks();
});

test('usePing fetches data using repository and updates refs', async () => {
    const pingRepositoryMock = {
        ping: vi.fn().mockResolvedValue('pong'),
    };

    const data = ref<string | undefined>(undefined);
    const isFetching = ref(false);
    const error = ref<unknown>(null);

    vi.mocked(useQuery).mockImplementation(({ queryFn }: any) => {
        return {
            data,
            isFetching,
            error,
            refetch: vi.fn(async () => {
                data.value = await queryFn();
                return { data: { value: data.value } };
            }),
        } as any;
    });

    const ping = new PingService(pingRepositoryMock).usePing();

    expect(useQuery).toHaveBeenCalledWith(
        expect.objectContaining({
            queryKey: ['ping'],
            enabled: false,
            queryFn: expect.any(Function),
        }),
    );

    await ping.fetch();

    expect(pingRepositoryMock.ping).toHaveBeenCalledOnce();
    expect(ping.data).toBe(data.value);
    expect(ping.isFetching).toBe(isFetching.value);
    expect(ping.error).toBe(error.value);
});
