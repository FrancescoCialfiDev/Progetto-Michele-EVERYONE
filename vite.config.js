import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import purgeCss from 'vite-plugin-purgecss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    purgeCss({
      content: ['index.html', 'src/**/*.{js,jsx,ts,tsx}'],
      safelist: {
        standard: [
          /^(btn|d-|flex|justify-|align-|gap-|position-|top-|start-|translate-|w-|h-|text-|bg-|fs-|fw-|overflow-|ratio|container)/,
          /^col/, /^row/, /^g-/, /^m[trblxy]?-/,
        ],
      },
    }),
  ],
})
