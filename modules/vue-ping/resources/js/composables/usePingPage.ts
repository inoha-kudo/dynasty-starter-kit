import { inject } from 'vue';
import { PingQueryFactory } from '../factories/pingQueryFactory';
import { pingRepositoryKey } from '../injectionSymbols';
import { PingMockRepository } from '../repositories/pingMockRepository';

export const usePingPage = () => {
    const pingRepository = inject(pingRepositoryKey, new PingMockRepository());

    const { usePingQuery } = PingQueryFactory.create(pingRepository);

    const pingQuery = usePingQuery();

    return {
        pingResponse: pingQuery.data,
        isPingFetching: pingQuery.isFetching,
        pingError: pingQuery.error,
        ping: pingQuery.refetch,
    };
};
