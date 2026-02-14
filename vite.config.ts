import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Aura-Club-2025/",
  build: {
    target: "es2015",
  },
})
