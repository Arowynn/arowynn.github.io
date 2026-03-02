import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html'),
        photography: resolve(__dirname, 'photography.html'),
        'sat-tycoon': resolve(__dirname, 'sat-tycoon.html'),
        'auburn-hacks': resolve(__dirname, 'auburn-hacks.html'),
      },
    },
  },
});