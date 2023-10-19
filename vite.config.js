import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://agu0925.github.io/React-Portfolio/",
  plugins: [react()],
})
