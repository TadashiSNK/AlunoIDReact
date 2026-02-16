import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      fs: false,
      path: false,
      crypto: false
    }
  },
  optimizeDeps: {
    exclude: ['face-api.js']
  }
})