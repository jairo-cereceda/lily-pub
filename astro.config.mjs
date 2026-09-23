// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://jairo-cereceda.github.io',
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 10000,
    },
  },
  integrations: [icon()],
});
