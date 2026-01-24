import { getDynastyAPIMock } from '@/api/generated/dynasty.msw';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...getDynastyAPIMock());
