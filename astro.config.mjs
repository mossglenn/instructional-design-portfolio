// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// eslint-disable-next-line no-unused-vars
import flowbite from 'flowbite';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['flowbite'],
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@bits': path.resolve('./src/components/bits'),
        '@layouts': path.resolve('./src/layouts'),
        '@pages': path.resolve('./src/pages'),
        '@public': path.resolve('./public'),
        '@styles': path.resolve('./src/styles'),
        '@assets': path.resolve('./src/assets'),
      },
    },
  },
  integrations: [react()],
});