// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://amoncarterwater.org',
  // Static output, deployed to Cloudflare Pages.
  vite: {
    plugins: [tailwindcss()],
  },
});
