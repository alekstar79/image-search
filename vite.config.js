import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { viteObfuscateFile } from 'vite-plugin-obfuscator'

export default defineConfig({
  base: '/image-search/',

  plugins: [
    splitVendorChunkPlugin(),
    viteObfuscateFile()
  ]
})
