import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/.*\.jsdelivr\.net\/.*/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'jsdelivr-cache',
          },
        },
      ],
    },
    includeAssets: ['vite.svg', 'manifest.json'],
  })],
})
