import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    host: true,
    allowedHosts: [
      'mula-star.org',
      'www.mula-star.org',
      'localhost',
      '.mula-star.org'
    ],
  },
  preview: {
    port: 8000,
    host: true,
    allowedHosts: [
      'mula-star.org',
      'www.mula-star.org',
      'localhost',
      '.mula-star.org'
    ],
  },
})
