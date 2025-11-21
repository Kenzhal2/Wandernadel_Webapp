import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon-512.png', 'splash.png'],
      manifest: {
        name: 'Sächsische Schweiz Wandernadel',
        short_name: 'Wandernadel',
        description: 'Digital hiking badge collection for Saxon Switzerland',
        theme_color: '#2d5016',
        background_color: '#f4e8d1',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\./,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              networkTimeoutSeconds: 10,
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    target: 'esnext',
    sourcemap: true,
    minify: 'esbuild', // Fast minification with esbuild
    cssMinify: true,
    chunkSizeWarningLimit: 500, // Warn if chunk exceeds 500KB
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB as base64
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Manual code splitting for better caching
        manualChunks: (id) => {
          // Vendor chunk for React and core dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            // Other node_modules go into vendor chunk
            return 'vendor';
          }
          // Split large feature modules into separate chunks
          if (id.includes('src/components/map')) {
            return 'chunk-map';
          }
          if (id.includes('src/components/passport')) {
            return 'chunk-passport';
          }
          if (id.includes('src/components/achievements')) {
            return 'chunk-achievements';
          }
        },
        // Optimize chunk file names for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      // Tree shaking is enabled by default in Vite/Rollup
      // External dependencies are automatically tree-shaken
    },
    // Tree shaking is enabled by default in Vite/Rollup
    // Unused exports are automatically removed during build
  },
  server: {
    port: 3000,
    open: true,
  },
});
