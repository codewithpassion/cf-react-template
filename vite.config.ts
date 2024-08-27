import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { viteWranglerSpa } from '@torchauth/vite-plugin-wrangler-spa';

export default defineConfig(() => {
  return {
    root: './packages/frontend',
    build: {
      outDir: path.join(__dirname, '/dist'),
      emptyOutDir: true,
    },
    ssr: {
      target: 'webworker',
    },
    server: {
      proxy: {
        '/api': {
          target: "http://localhost:5554",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      react(),
      viteWranglerSpa({
        functionEntrypoint: 'packages/api/index.ts',
        allowedApiPaths: ['^/api/*', '^/oauth/*'],
      }),
    ],
  };
});