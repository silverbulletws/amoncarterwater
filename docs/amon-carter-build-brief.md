# Amon Carter Lake WSC — Homepage Build Brief

Scope: homepage only. Header, status bar, hero, task grid, footer, plus the shared layout. Nothing else yet.

Stack: Astro + Tailwind v4, hand-built (no `npm create astro` starter), deployed to Cloudflare Pages. Same shape as the White's Magneto build.

---

## Design tokens

Put these in `src/styles/global.css` as CSS custom properties so they're changeable in one place.

```
--acw-deep:      #04342C   /* hero background, headings on white */
--acw-green:     #0F6E56   /* primary brand, icons, borders on dark */
--acw-mid:       #1D9E75   /* status dot, small accents */
--acw-light:     #9FE1CB   /* subheads on dark, hairlines on tint */
--acw-tint:      #E1F5EE   /* status strip background, section washes */
--acw-alert:     #993C1D   /* report-a-leak button, urgent states */
--acw-ink:       #2C2C2A   /* body text */
--acw-muted:     #5F5E5A   /* secondary text */
--acw-rule:      #D3D1C7   /* dividers */
```

**Typography.** Headings in Instrument Sans, body in Inter, both from Google Fonts. Weights 400 and 500 only — no 700 anywhere. If Instrument Sans feels too geometric once it's on screen, fall back to Inter throughout with `letter-spacing: -0.02em` on headings.

**Rules of the road.** Flat surfaces, no gradients, no drop shadows, no rounded-corner overload (6–8px, never pills). Generous whitespace. Left-aligned text, not centered — centered everything is what made the old site feel like a church bulletin.

---

## File structure

```
src/
  layouts/Layout.astro
  components/
    Header.astro
    StatusBar.astro
    Hero.astro
    TaskGrid.astro
    Footer.astro
  data/
    status.json
    nav.js
  pages/
    index.astro
  styles/global.css
public/images/
```

---

## The status system — build this as data from day one

This is the one architectural decision that matters. The status bar must read from a data file, never from hardcoded markup.

`src/data/status.json`:

```json
{
  "level": "normal",
  "headline": "All systems A-OK",
  "detail": "Water is safe to drink, no advisories in effect",
  "updated": "2026-08-21T09:14:00-05:00"
}
```

`StatusBar.astro` imports it and maps `level` to a presentation:

| level | background | text | icon | behavior |
|---|---|---|---|---|
| `normal` | `--acw-tint` | `--acw-deep` | filled dot | single slim strip |
| `advisory` | amber tint | dark amber | `ti-alert-triangle` | slim strip, slightly taller |
| `boil` | red tint | dark red | `ti-alert-octagon` | full-width band above the header, pushes page down |
| `outage` | red tint | dark red | `ti-droplet-off` | same as boil |

Render `updated` as a friendly relative-plus-absolute string ("Updated 21 Aug, 9:14 AM").

**Why it matters:** when we build the thing Ross uses from his truck, that tool's only job becomes writing this one small object. If the status is hardcoded in markup now, that becomes a rewrite later. If it's data now, it's a swap.

Build all four states and leave a comment showing how to preview each. Don't build any editing interface yet.

---

## Components

### Layout.astro
Standard shell. Meta, fonts, global.css, slot. Set `lang="en"`, a sensible title template, and a description mentioning Lake Amon Carter, Bowie, and water service — this site has to be findable, since it currently isn't.

### Header.astro
Left: a simple mark (rounded square, brand green, single droplet icon) plus a two-line wordmark — "Amon Carter Lake" on top, "WATER SUPPLY CORPORATION" beneath in small letterspaced caps.

Right: nav — Notices, My account, Water quality, Contact — then a solid `--acw-alert` button reading "Report a leak" that links to `tel:9408412961`.

Sticky on scroll. Below `xl` (1280px), collapse to a hamburger — same breakpoint decision as the White's Magneto build, since tablets were landing on the desktop layout there. The "Report a leak" button stays visible at every width; it never collapses into the menu.

### Hero.astro
Full-bleed `--acw-deep` block. Eyebrow in `--acw-light` small caps, then a headline around 40–48px at weight 500, then a subhead, then two buttons — one solid white, one outlined.

Leave a background image slot wired up (darkened overlay, ~55% black) for the lake photo once it's recovered. Solid color until then; it should look finished either way.

### TaskGrid.astro
Three columns on desktop, stacked on mobile, divided by hairlines rather than wrapped in cards. Icon, label, one line of description each. Pay your bill / Transfer service / Service area.

### Footer.astro
Four columns: contact block, quick links, "About the corporation" (non-profit, member-owned, CCN 12793, TCEQ PWS 1690023), and the Facebook link. SBWS credit line at the very bottom, small.

---

## Real content to use

```
Business office     (940) 872-5505
Emergency / leaks   (940) 841-2961   — "Technician on duty"
Mail                P.O. Box 512, Bowie, Texas 76230
Office              607-A Lindsey St, Bowie, Texas 76230
Facebook            facebook.com/ACLWSC
CCN                 12793
TCEQ PWS            1690023
```

Copy that's theirs, worth keeping: "All systems A-OK." "Superior-rated potable water." "We purchase our water from the City of Bowie, and through our own equipment and lines, supply it to your meter." "A non-profit, member-owned and member-controlled corporation."

**Do not publish office hours.** The office is unstaffed. The old "9–11AM Tu/We/Th" line would send people to a locked door.

**Do not publish any rate figures** until the May 2024 tariff is pulled from the PUC.

---

## Placeholders to flag in the code

Mark each with a `TODO` comment so they're easy to sweep later:

- Hero background image (awaiting the lake photo)
- "Since 1995" — inferred from the old site, needs Kevin's confirmation
- 2025 CCR link (awaiting the PDF)
- Service area map (`coveragemap.jpg`, to be recovered)
- Every nav destination except the homepage

---

## Not in scope tonight

Interior pages. Forms of any kind. The status editing tool. Email. Anything touching bank details.
