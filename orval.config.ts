import { defineConfig } from 'orval';

export default defineConfig({
  dynasty: {
    input: './storage/api-docs/api-docs.json',
    output: {
      target: './resources/js/api/generated/dynasty.ts',
      mode: 'split',
      mock: true,
      baseUrl: '/api',
      override: {
        useRequestInit: true,
        mutator: {
          path: './resources/js/api/axios-instance.ts',
          name: 'axiosInstance',
        },
      },
    },
  },
});
