import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the same build works on project Pages, user Pages, or a subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
})
