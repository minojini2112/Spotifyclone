import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Spotifyclone/",
  server: {
    host: "0.0.0.0",  // Ensure it listens on all network interfaces
    port: process.env.PORT || 3000  // Use Render's assigned port or fallback to 3000
  }
})
