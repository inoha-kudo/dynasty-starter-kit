import type { InjectionKey } from 'vue';
import type { PingRepository } from './repositories/pingRepository';

export const pingRepositoryKey = Symbol() as InjectionKey<PingRepository>;
