import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteWranglerSpa } from '@torchauth/vite-plugin-wrangler-spa';
import path from 'path';

console.log(path.resolve(__dirname, '../functions/index.ts'));

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'https://api.dev.overlaplifeecho.solutions.rockyshoreslabs.io',
        target: "http://localhost:55554",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    react(),
    viteWranglerSpa({
      functionEntrypoint: path.resolve(__dirname, '../functions/index.ts'),
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
