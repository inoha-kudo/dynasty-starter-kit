import { inject } from 'vue';
import { pingRepositoryKey } from '../injectionSymbols';
import { PingService } from '../services/pingService';

export const usePingPage = () => {
    const pingService = new PingService(inject(pingRepositoryKey));

    const { usePing } = pingService.createComposables();

    return {
        ping: usePing(),
    };
};
