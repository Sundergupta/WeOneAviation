import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // This is the correct, stable way to use the React plugin with React 18
    react(),
  ],
})