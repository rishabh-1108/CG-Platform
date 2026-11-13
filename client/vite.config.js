import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // <-- Try 127.0.0.1 instead of localhost
        changeOrigin: true, // <-- THIS IS SUPER IMPORTANT FOR CODESPACES
        secure: false,
      }
    }
  }
})