import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import path from 'path'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'), 
      '@': '/src' // 將 '@' 別名設定為指向 src 目錄
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
