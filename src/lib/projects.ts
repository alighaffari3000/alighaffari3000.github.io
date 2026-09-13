import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

/**
 * Every published project, in display order.
 *
 * One place decides what "published" and "in order" mean, because three call
 * sites need the same answer: the card grid, and the getStaticPaths of both
 * localised case study routes. If they disagreed, a project could show up in
 * the grid with no page behind it.
 *
 * Ascending `order`, then newest `date` first. A project with no date sorts
 * last within its order group rather than throwing the comparison off.
 */
export async function getPublishedProjects(): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects', ({ data }) => data.published);

  return entries.sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    const at = a.data.date?.getTime() ?? 0;
    const bt = b.data.date?.getTime() ?? 0;
    return bt - at;
  });
}

/** Flatten an entry into the plain object the page components expect. */
export function toProjectRecord(entry: ProjectEntry) {
  return { ...entry.data, slug: entry.id };
}
