# Portfolio

Bilingual portfolio and project case studies for Ali Ghaffari. English at `/`,
Persian at `/fa`, rendered RTL.

Built with Astro as a **static site** and published to GitHub Pages at
https://alighaffari3000.github.io. There is no server, no database and no admin
panel: every page is rendered to HTML at build time, and project content lives in
Markdown files in the repository.

## Adding a project

1. Copy `src/content/projects/example-project.md` to a new file. **The filename
   becomes the URL:** `order-bot.md` is served at `/projects/order-bot` and
   `/fa/projects/order-bot`.
2. Fill in the fields. Only `title` is required. Every translatable field has a
   `*Fa` counterpart, and an empty Persian value falls back to the English one,
   so a half-translated project still renders completely.
3. Set `published: true`.
4. Put images under `public/projects/<slug>/` and reference them from the site
   root: `heroImage: /projects/order-bot/hero.webp`.
5. Commit and push to `main`. The site rebuilds and redeploys itself.

The full field list, with what each one does, is in `src/content.config.ts`.

To hide a project without deleting it, set `published: false`. No page is built
for it and it disappears from the grid.

## Commands

| Command           | What it does                                  |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Dev server at http://localhost:4321           |
| `npm run build`   | Build the static site into `dist/`            |
| `npm run preview` | Serve `dist/` locally, exactly as it deploys  |

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
uploads `dist/` to GitHub Pages. Nothing is deployed by hand.

One-time repository setup: **Settings → Pages → Build and deployment → Source:
GitHub Actions**. Until that is set, the workflow builds but the deploy step
fails, because Pages is still waiting on a branch.

`public/.nojekyll` is not optional. GitHub Pages runs Jekyll by default, and
Jekyll drops directories whose name starts with an underscore, which is exactly
where Astro puts every hashed asset (`_astro/`). Without that file the site
deploys with no CSS and no JavaScript.

## Layout

```
src/
├── content/projects/     one Markdown file per case study
├── content.config.ts     the schema those files are checked against
├── lib/
│   ├── i18n.ts           locale routing, UI strings, EN/FA fallback
│   └── projects.ts       which projects are published, and in what order
├── components/           Astro sections + three React islands
├── layouts/Layout.astro  <head>, fonts, view transitions, skip link
└── pages/                / and /fa, mirrored
```
