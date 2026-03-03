import { PingService } from '@miraiportal/vue-ping';
import { inject, reactive } from 'vue';
import { pingRepositoryKey } from '../injectionSymbols';

export const usePingPage = () => {
    const pingService = new PingService(inject(pingRepositoryKey));

    const query = pingService.usePing();

    return {
        ping: reactive({
            data: query.data,
            isFetching: query.isFetching,
            error: query.error,
            fetch: query.refetch,
        }),
    };
};
