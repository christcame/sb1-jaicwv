import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/key': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.removeHeader('Origin');
          });
        },
        bypass: (req, res) => {
          if (req.url === '/api/key') {
            const key = Math.random().toString(36).substring(2) + 
                       Date.now().toString(36) + 
                       Math.random().toString(36).substring(2);
            res.end(key);
            return true;
          }
        },
      },
    },
  },
});