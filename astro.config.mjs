// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://modorefugio.com',
  trailingSlash: 'always',
  redirects: {
    '/playbook/sin-internet/': '/playbook/caida-mundial-de-internet/',
    '/preparate/riesgo/sin-internet/': '/preparate/riesgo/caida-mundial-de-internet/',
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/imprimir/') && !page.includes('/og/') && !page.includes('sin-internet'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES' } },
    }),
  ],
  image: { responsiveStyles: true },
  build: { inlineStylesheets: 'auto' },
});
