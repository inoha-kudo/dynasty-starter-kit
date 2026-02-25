import type { InjectionKey } from 'vue';
import type { PingRepository } from './contracts/pingRepository';

export const pingRepositoryKey = Symbol() as InjectionKey<PingRepository>;
