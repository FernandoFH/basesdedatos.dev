import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://basesdedatos.dev/',
  trailingSlash: 'always',
  integrations: [react(), tailwind()]
});