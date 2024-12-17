// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',  // the root directory of your project
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
    outDir: 'dist',  // output directory for built files
  },
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:4000', // Proxy API requests to Go server
  //     '/': 'http://localhost:4000', // Proxy static requests to Go server
  //   },
  // },
});
