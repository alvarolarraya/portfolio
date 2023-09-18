import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [react()],
  output: "hybrid",
  adapter: vercel()
});