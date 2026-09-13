// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

/*
  Static build, deployed to GitHub Pages.

  There is no server: every page is rendered to HTML at build time and the
  result in `dist/` is uploaded as-is. That is why there is no adapter, no
  `output: 'server'`, and no `security.allowedDomains` — the CSRF check that
  setting fed only ever ran on a live server, and nothing here POSTs anymore.

  `site` is the deployed origin. It is what Astro uses to build absolute URLs.
  Because the repository is named `alighaffari3000.github.io`, the site lives at
  the root of that domain and needs no `base`. If it is ever moved into a
  project repository (served from `/<repo-name>/`), add `base: '/<repo-name>'`
  here and every internal link and asset path must be prefixed with
  `import.meta.env.BASE_URL`.
*/
export default defineConfig({
  site: 'https://alighaffari3000.github.io',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
