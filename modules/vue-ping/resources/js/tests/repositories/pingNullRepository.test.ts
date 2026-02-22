import { PingNullRepository } from '../../repositories/pingNullRepository';

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

test('ping', async () => {
    const repository = new PingNullRepository();
    const promise = repository.ping();

    await vi.advanceTimersByTimeAsync(500);

    expect(promise).resolves.toBe('');
});
