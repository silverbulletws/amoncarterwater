/**
 * Current system status. Change `level` to one of: normal, advisory, boil, outage.
 * Headline and detail copy live in statuses.js, keyed to the level.
 *
 * TODO: replaced by a KV read once the technician's keypad exists.
 */
export default {
  level: 'normal',
  updated: '2026-08-27T09:00:00-05:00',
};