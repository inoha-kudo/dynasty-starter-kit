import type { PingRepository } from '@miraiportal/vue-ping';
import type { InjectionKey } from 'vue';

export const pingRepositoryKey = Symbol() as InjectionKey<PingRepository>;
