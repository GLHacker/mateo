import { defineConfig } from 'vite'

export default defineConfig({
    base: '/mateo/',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true
    }
})
