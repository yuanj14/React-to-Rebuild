import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: false,
    port: 5173,
    // 手动刷新进行文件更新配置
    watch: {
      usePolling: true,
    },
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
