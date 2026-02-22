import { PingMockRepository } from '../../repositories/pingMockRepository';

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

test('ping', async () => {
    const repository = new PingMockRepository();
    const promise = repository.ping();

    await vi.advanceTimersByTimeAsync(500);

    expect(promise).resolves.toBe('[MOCK] pong');
});
