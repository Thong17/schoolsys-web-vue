/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import vuetify from 'vite-plugin-vuetify'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['src/tests/**/*.spec.ts'],
  },
})
