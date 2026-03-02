import { PingService } from '@miraiportal/vue-ping';
import { inject } from 'vue';
import { pingRepositoryKey } from '../injectionSymbols';

export const usePingPage = () => {
    const pingService = new PingService(inject(pingRepositoryKey));

    return {
        ping: pingService.usePing(),
    };
};
