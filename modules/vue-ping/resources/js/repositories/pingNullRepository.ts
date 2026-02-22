import type { PingRepository } from './pingRepository';

export class PingNullRepository implements PingRepository {
    ping(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('');
            }, 500);
        });
    }
}
