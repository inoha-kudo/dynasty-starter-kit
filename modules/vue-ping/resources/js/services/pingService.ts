import type { UseQueryReturnType } from '@tanstack/vue-query';
import { useQuery } from '@tanstack/vue-query';
import type { PingRepository } from '../contracts/pingRepository';
import { PingNullRepository } from '../repositories/pingNullRepository';

export class PingService {
    constructor(private readonly pingRepository: PingRepository = new PingNullRepository()) {}

    usePing(): UseQueryReturnType<string, Error> {
        return useQuery({
            queryKey: ['ping'],
            queryFn: () => this.pingRepository.ping(),
            enabled: false,
        });
    }
}
