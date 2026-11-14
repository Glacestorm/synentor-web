// @ts-check
import { defineConfig } from 'astro/config';

// Web estática: Astro genera dist/ y Cloudflare Workers la sirve (wrangler.jsonc).
export default defineConfig({
  site: 'https://synentor.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
