import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      //'/api': 'http://localhost:4000',  // Proxy API requests to backend
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false, // Set this to false if you're not using HTTPS in dev
      },
    },
  },
})

