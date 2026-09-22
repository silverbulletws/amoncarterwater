/**
 * Form handler. Both application forms POST JSON to the Silver Bullet forms
 * Worker, which verifies Turnstile, stores the submission and emails the office.
 *
 * The Worker gives `name`, `email`, `phone`, `message`, `page_url` and
 * `form_name` columns of their own. Every other field is bundled into an
 * `extra` blob, and its key becomes the row label in the notification email:
 * "service-address" arrives as "Service Address". So name extra fields in
 * readable dash-separated words — not abbreviations, not camelCase.
 */

export const FORMS = {
  // TODO(client): confirm the site slug. The row has to exist in the Worker's
  // D1 `sites` table with amoncarterwater.org in its allowed_origins, or every
  // submission comes back 404.
  endpoint: 'https://contact-api.kenny-e06.workers.dev/v1/forms/amoncarterwater',

  // Cloudflare Turnstile public site key. The secret half lives only in the
  // Worker, as the TURNSTILE_SECRET_KEY secret.
  // TODO(client): this is Cloudflare's "always passes" test key. Replace it
  // with the real site key for amoncarterwater.org before go-live.
  turnstileSiteKey: '0x4AAAAAAEJh7Yql6Y4BoRtQ',

  // The hidden field bots fill in and people never see. Must match
  // HONEYPOT_FIELDS in the Worker.
  honeypotField: 'website_url',
};
