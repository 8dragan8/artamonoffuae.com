import vercelStatic from '@astrojs/vercel/static'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  // Must be 'static' or 'hybrid'
  output: 'static',
  adapter: vercelStatic(),
  integrations: [icon()],
  devToolbar: {
    enabled: false,
  },
})
