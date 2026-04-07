import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  build: {
    // Output vai para platform/dist/ (um nível acima de platform/portal/)
    outDir: path.resolve(__dirname, '../dist'),
    emptyOutDir: false, // Não apagar as aulas já buildadas!
  },
})
