/**
 * Recent notices, newest first.
 *
 * TODO: convert to an Astro content collection (src/content/notices/*.md) so
 * notices can be authored as markdown with frontmatter instead of edited as
 * JavaScript strings. Worth doing before anyone writes a long incident log —
 * see the March 2025 boil water updates on the old site for what those look
 * like. Deferred for now because notices may end up coming from KV once the
 * technician's status tool exists.
 *
 * TODO: all copy below is invented for the demo except the chloramine notice,
 * which is adapted from the corporation's own 2019 wording.
 */
export const notices = [
  {
    slug: 'hydrant-flushing-east-side',
    date: '2026-08-14',
    kind: 'Maintenance',
    title: 'Hydrant flushing on the east side of the lake',
    summary:
      'Crews will be flushing hydrants Tuesday and Wednesday. You may notice discolored water for a short time afterward. Run a cold tap for a few minutes and it should clear.',
    body: [
      'Crews will be flushing hydrants on the east side of the lake Tuesday and Wednesday. Flushing clears sediment out of the lines and lets us check that hydrants are working the way they should.',
      'You may notice discolored water for a short time afterward. It is not harmful. Run a cold tap for a few minutes and it should clear up. Hold off on washing light-colored laundry until it does.',
      'If your water is still discolored after a few hours, give us a call.',
    ],
    flag: 'demo',
  },
  {
    slug: 'ccr-2025-available',
    date: '2026-07-02',
    kind: 'Water quality',
    title: 'Your 2025 Consumer Confidence Report is available',
    summary:
      'The annual report on your drinking water quality is now posted. It covers where your water comes from, what was tested for, and what was found.',
    body: [
      'Every community public water system in the country is required to publish an annual report on drinking water quality. Ours is now available.',
      'The report covers where your water comes from, what we tested for over the past year, what was found, and how those levels compare to the limits set by the state and the EPA.',
    ],
    flag: 'demo',
  },
  {
    slug: 'chloramines-to-free-chlorine',
    date: '2026-06-18',
    kind: 'General',
    title: 'Seasonal change from chloramines to free chlorine',
    summary:
      'The City of Bowie makes this change every summer. You may notice a slight odor or a tinge of taste to the water for about a month. It does not indicate anything wrong.',
    body: [
      'The City of Bowie is in the process of going from chloramines to free chlorine, as they do every summer.',
      'There may be a bit of an odor, and perhaps even a tinge of a taste to the water. This could take about a month to progress through our system.',
      'As a reminder, it indicates nothing wrong with the water. It is just a change in treatment.',
    ],
    flag: 'verify',
  },
];