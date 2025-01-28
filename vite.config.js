import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure this matches your deployment directory
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Adjust for your backend API during development
    },
  },
})
