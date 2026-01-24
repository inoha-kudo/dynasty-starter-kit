import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { getDynastyAPIMock } from '../api/generated/dynasty.msw';

export const server = setupServer(...getDynastyAPIMock());

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
