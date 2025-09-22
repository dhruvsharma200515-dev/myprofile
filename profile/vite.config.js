import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'copy-redirects',
          closeBundle() {
            const src = path.resolve('_redirects')       // root file
            const dest = path.resolve('dist/_redirects') // copy into dist
            fs.copyFileSync(src, dest)
          }
        }
      ]
    }
  }
})
