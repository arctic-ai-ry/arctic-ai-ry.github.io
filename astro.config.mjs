// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://arcai.fi',
  // English pages used to have Finnish names. Old links keep working through these.
  redirects: {
    '/en/vapaaehtoiset': '/en/volunteers',
    '/en/saannot': '/en/rules',
    '/en/tietosuoja': '/en/privacy',
    '/en/palvelut': '/en/services',
    '/en/blogi': '/en/blog',
    '/en/blogi/[slug]': '/en/blog/[slug]',
  },
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'en'],
    routing: {
      prefixDefaultLocale: true,
      // Astro's built-in root redirect is a meta refresh with a 2 second wait.
      // src/pages/index.astro sends / to /fi/ immediately instead.
      redirectToDefaultLocale: false,
    },
  },
  integrations: [mdx(), icon(), sitemap()]
});