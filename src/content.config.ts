import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Project case studies, one Markdown file per project in src/content/projects/.

  This replaces the Prisma `Project` and `GalleryImage` tables from the server
  build. The shape is deliberately the same as those models so the components
  that render it did not have to change: every translatable field keeps its
  `*Fa` counterpart, and an empty Persian value falls back to the English one in
  resolveProject() (src/lib/i18n.ts).

  Two things did change now that the data is a file rather than a database row:

  - `slug` is the filename. `my-project.md` is served at /projects/my-project
    and /fa/projects/my-project, so renaming a file changes a public URL.
  - `features`, `featuresFa` and `techStack` are real YAML lists. In SQLite they
    were JSON encoded into a text column because the column could not hold an
    array; here there is nothing to encode around.

  `example-project.md` is the field-by-field template to copy. It carries
  `published: false`, so it is a real entry the schema validates but no page is
  ever built for it — which also keeps the collection from being empty, a state
  Astro warns about on every route that reads it.
*/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    titleFa: z.string().optional(),

    summary: z.string().optional(),
    summaryFa: z.string().optional(),

    description: z.string().optional(),
    descriptionFa: z.string().optional(),
    problem: z.string().optional(),
    problemFa: z.string().optional(),
    solution: z.string().optional(),
    solutionFa: z.string().optional(),
    architecture: z.string().optional(),
    architectureFa: z.string().optional(),
    challenges: z.string().optional(),
    challengesFa: z.string().optional(),
    results: z.string().optional(),
    resultsFa: z.string().optional(),

    features: z.array(z.string()).default([]),
    featuresFa: z.array(z.string()).default([]),
    /* Product names — identical in both languages, so there is no `techStackFa`. */
    techStack: z.array(z.string()).default([]),

    /* Site-root-relative path into public/, e.g. /projects/foo/hero.webp */
    heroImage: z.string().optional(),
    gallery: z
      .array(
        z.object({
          url: z.string(),
          caption: z.string().optional(),
          captionFa: z.string().optional(),
        })
      )
      .default([]),

    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),

    /*
      Shown as the badge on the project card.

      Stated rather than inferred. The card used to read it off `demoUrl`, on
      the assumption that a delivered project has a public demo, which is wrong
      for most of this work: client systems, internal admin panels and Telegram
      bots are all live and none of them has a URL a stranger can open. That
      heuristic labelled every finished project "In development".

      Defaults to delivered, because a portfolio lists work that is done.
    */
    status: z.enum(['delivered', 'in-progress']).default('delivered'),

    /* An unpublished project is skipped entirely: no page is built for it. */
    published: z.boolean().default(true),
    /* Ascending. Ties are broken by `date`, newest first. */
    order: z.number().default(0),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { projects };
