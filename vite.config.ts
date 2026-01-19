import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: false,
    port: 5173,
  },

  build: {
    //sourcemap:
  },
  resolve: {
    alias: {
      '~': '/src', // '~' 将映射到 '/src' 目录
    },
  },
})
