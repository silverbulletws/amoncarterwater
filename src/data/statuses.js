/**
 * The four canonical states. Copy lives here, beside the level it belongs to,
 * so the two can never drift apart — which is exactly how the boil-text-on-a-
 * green-strip bug happened.
 *
 * This is also the first draft of the fixed message list the technician's
 * keypad will write from. Nothing here is board-approved yet.
 */
export const statuses = {
  normal: {
    headline: 'All systems A-OK',
    detail: 'Water is safe to drink, no advisories in effect',
  },
  advisory: {
    headline: 'Water conservation advisory',
    detail: 'Please limit outdoor watering until further notice',
  },
  boil: {
    headline: 'Boil water notice in effect',
    detail: 'Bring water to a rolling boil for two minutes before drinking or cooking',
  },
  outage: {
    headline: 'Service outage',
    detail: 'Crews are on site. We will post here as soon as service is restored',
  },
};