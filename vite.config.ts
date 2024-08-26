import { defineConfig } from 'vite'
import { viteWranglerSpa } from '@torchauth/vite-plugin-wrangler-spa';
import path from 'path';
import frontendConfig from './packages/frontend/vite.config';

// https://vitejs.dev/config/
export default defineConfig({
  ...frontendConfig,
  root: './packages/frontend',
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:55554",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    ...(frontendConfig.plugins || []),
    viteWranglerSpa({
      functionEntrypoint: path.resolve(__dirname, 'packages/api/index.ts'),
      wranglerConfig: {
        port: 55553,
      }
    }),
  ],
})
