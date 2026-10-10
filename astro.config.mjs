import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url,
  output: 'static',
  integrations: [sitemap({ filter: (page) => !['/tack', '/recension', '/fastighetsservice-trollhattan', '/404'].some((p) => page.includes(p)) })],
});
