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
            const srcPath = path.resolve('_redirects')       // root file
            const distPath = path.resolve('dist/_redirects') // copy into dist
            if (fs.existsSync(srcPath)) {
              fs.copyFileSync(srcPath, distPath)
              console.log('_redirects copied to dist/')
            }
          }
        }
      ]
    }
  }
})
