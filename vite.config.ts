import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/_novita': {
        target: 'https://3000-i0dnub7ulkkulmrewauwp-2e77fc33.sandbox.novita.ai',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/_novita/, ''),
      },
    },
    allowedHosts: [
      '3000-i0dnub7ulkkulmrewauwp-2e77fc33.sandbox.novita.ai'
    ],
  },
})
