import type { PingRepository } from './pingRepository';

export class PingMockRepository implements PingRepository {
    ping(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('[MOCK] pong');
            }, 500);
        });
    }
}
