import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://8dragan8.github.io',
  base: 'artamonoffuae.com',
  integrations: [tailwind()]
});