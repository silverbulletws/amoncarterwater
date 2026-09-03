/**
 * Recent notices, newest first.
 */
export const notices = [
  {
    slug: 'new-website',
    date: '2026-09-03',
    kind: 'General',
    title: 'A new website for Amon Carter Lake Water Supply',
    summary:
      'Our website has been rebuilt from the ground up. You can now check the water status, look up rates, see the service area, and start service or set up bank draft online.',
    body: [
      'Our website has been rebuilt. The old one had been offline, and we wanted to replace it with something that answers the questions members actually call about.',
      'At the top of every page you will find the current system status. When everything is running normally it says so. If there is a boil water notice, an outage, or a conservation advisory, it will say that instead, and we will post updates here as we get them.',
      'You can also look up rates and fees, read the latest water quality report, check whether a property falls inside our service area, and fill out an application for service or a bank draft form without printing anything.',
      'If you spot something wrong on the site, or you cannot find what you came for, call the office and let us know.',
    ],
    flag: '',
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
    link: { href: '/reports/ccr-2025.pdf', label: 'Read the 2025 report (PDF)', newTab: true },
    flag: '',
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
    flag: '',
  },
];