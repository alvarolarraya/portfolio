import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


export default defineConfig({
  markdown: {
    drafts: true,
  },
  integrations: [react()]
});