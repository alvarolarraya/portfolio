import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:'https://www.alvarolarraya.com/',
  markdown: {
    drafts: true
  },
  integrations: [react(), sitemap()],
  output: "hybrid",
  adapter: vercel()
});