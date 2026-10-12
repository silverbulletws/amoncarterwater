import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * System status posts. The banner at the top of every page shows only the
 * newest one (by `date`); older posts are kept as a record of what was posted
 * and when. Staff add them with the SBWS post editor, see sbws.json.
 */
const status = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/status' }),
  schema: z.object({
    // The bold first line, e.g. "Boil water notice in effect".
    headline: z.string(),
    // The line after it, e.g. "Boil water for two minutes before drinking".
    detail: z.string().optional(),
    // green, amber and blue are a slim strip under the header: the dot is the
    // colour, the strip a pale shade of it. red is a full-width dark red band
    // above the header, for boil water notices and outages.
    color: z.enum(['green', 'amber', 'red', 'blue']),
    // When the status was posted. Written without a timezone and read as
    // Bowie (US Central) time, see StatusBar.astro.
    date: z.coerce.date(),
  }),
});

/**
 * Notices: the "Latest notices" list on the home page (newest three) and the
 * /notices/ page (all of them, each at /notices/#<file name>).
 */
const notices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notices' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // The small label above the title.
    kind: z.enum(['General', 'Billing', 'Water quality', 'Outage']),
    // One or two sentences, shown on the home page instead of the full text.
    summary: z.string(),
    // An optional button under the notice, e.g. a link to a PDF report.
    linkUrl: z.string().optional(),
    linkLabel: z.string().optional(),
  }),
});

export const collections = { status, notices };
