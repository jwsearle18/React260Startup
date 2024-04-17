import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3003',
      '/ws': {
        target: 'ws://localhost:3003',
        ws: true,
      },
    },
  },
});