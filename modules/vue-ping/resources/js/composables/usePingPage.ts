import { inject } from 'vue';
import { pingRepositoryKey } from '../injectionSymbols';
import { PingService } from '../services/pingService';

export const usePingPage = () => {
    const pingRepository = inject(pingRepositoryKey);

    const { usePing } = new PingService(pingRepository).createComposables();

    return {
        ping: usePing(),
    };
};
