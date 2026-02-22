import { useQuery } from '@tanstack/vue-query';
import type { PingRepository } from '../repositories/pingRepository';

export class PingService {
    constructor(private readonly pingRepository: PingRepository) {}

    createComposables() {
        return {
            usePing: this.createUsePing(),
        };
    }

    private createUsePing() {
        return () => {
            const query = useQuery({
                queryKey: ['ping'],
                queryFn: () => this.pingRepository.ping(),
                enabled: false,
            });

            return {
                data: query.data,
                isFetching: query.isFetching,
                error: query.error,
                fetch: query.refetch,
            };
        };
    }
}
