import { useQuery } from '@tanstack/vue-query';
import { reactive } from 'vue';
import type { PingRepository } from '../contracts/pingRepository';
import { PingNullRepository } from '../repositories/pingNullRepository';

export class PingService {
    constructor(private readonly pingRepository: PingRepository = new PingNullRepository()) {}

    usePing() {
        const query = useQuery({
            queryKey: ['ping'],
            queryFn: () => this.pingRepository.ping(),
            enabled: false,
        });

        return reactive({
            data: query.data,
            isFetching: query.isFetching,
            error: query.error,
            fetch: query.refetch,
        });
    }
}
