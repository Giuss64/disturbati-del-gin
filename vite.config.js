import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using classic JSX transform via Vite default
export default defineConfig({
  plugins: [react()],
})
