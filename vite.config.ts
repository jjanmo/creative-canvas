import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/home/index.html'),
        vampire: resolve(__dirname, 'src/games/vampire-survivor/index.html'),
      },
      output: {
        manualChunks: {
          phaser: ['phaser'], // 게임 엔진 별도 번들링
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      '@shared': resolve(__dirname, 'src/shared'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
  server: {
    port: 8080,
    open: '/home/index.html',
  },
});
