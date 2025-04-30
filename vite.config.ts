import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/3pro2025third/', // 
  build: {
    outDir: 'docs', // 出力先を 'docs' に変更
  },
})
