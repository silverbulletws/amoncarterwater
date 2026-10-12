import { getCollection } from 'astro:content';

/** All notices, newest first. Each notice's id is its file name. */
export async function getNotices() {
  const notices = await getCollection('notices');
  return notices.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * "September 16, 2026". Dates are written as 2026-09-16, which the
 * frontmatter parser reads as midnight UTC, so format in UTC to keep the day.
 */
export const formatNoticeDate = (d: Date) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(d);

/** "2026-09-16", for <time datetime>. */
export const isoDay = (d: Date) => d.toISOString().slice(0, 10);
