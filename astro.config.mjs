import { defineConfig } from 'astro/config';

// Utils and plugins
import remarkModifiedTime from './src/utils/remark-modified-time.mjs';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Astro Configuration
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // Site Information
  site: 'https://develjuanma.com',
  // Markdown Configuration
  markdown: {
    // Using custom Remark plugin to get modified time
    remarkPlugins: [remarkModifiedTime]
  },
  // Third-party Integrations
  integrations: [
  // Tailwind CSS for styling
  tailwind(),
  // Sitemap generator
  sitemap(),
  // MDX support
  mdx(), preact()]
});