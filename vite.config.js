import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'timespan',
      fileName: 'timespan',
      formats: ['es', 'umd'],
    },
  },
});
