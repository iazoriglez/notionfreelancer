import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://notionfreelancer.com',
  integrations: [
    mdx(),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
