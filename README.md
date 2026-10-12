# Amon Carter Lake WSC

Homepage for **Amon Carter Lake Water Supply Corporation** — Bowie, Texas.

Astro + Tailwind v4, hand-built (no starter CLI). Static output, deployed to
Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # static site to ./dist
npm run preview  # preview the production build
npm run check    # type-check .astro files
```

## Deploy (Cloudflare Pages)

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** Astro

## Status and notices

Staff post both with the SBWS post editor
(https://app.silverbulletweb.com/sbws-post-editor/). Each post is one Markdown
file; nothing about them is hard-coded in the pages.

### System status

One file per update in [`src/content/status/`](src/content/status/):

```yaml
headline: All systems A-OK
detail: Water is safe to drink, no advisories in effect   # optional
color: green                 # green, amber, blue or red
date: 2026-09-17T09:00:00    # Bowie time, no timezone
```

Every page shows only the **newest** update (by `date`); older ones stay as a
record. Everything is drawn by
[`src/components/StatusBar.astro`](src/components/StatusBar.astro).

| color | appearance | placement |
|---|---|---|
| `green` | pale green strip, green dot | slim strip below the header |
| `amber` | pale amber strip, amber dot | slim strip below the header |
| `blue` | pale blue strip, blue dot | slim strip below the header |
| `red` | dark red band, white text, alert icon | full-width band **above** the header, stays on screen |

### Notices

One file per notice in [`src/content/notices/`](src/content/notices/): title,
date, type, a short summary, an optional button (`linkUrl`, `linkLabel`), and
the full text as Markdown below the frontmatter. The home page lists the
newest three (summary only); [`/notices/`](src/pages/notices.astro) shows them
all in full, each at `/notices/#<file name>`.

## Design tokens

All colour, type and radius tokens live in one `:root` block in
[`src/styles/global.css`](src/styles/global.css) and are mapped into Tailwind
through `@theme inline`, so `bg-acw-deep` resolves to `var(--acw-deep)`.
Change a token there and it changes everywhere.

Weights 400 and 500 only — nothing on this site is 700.

## Scope

Homepage only: layout, header, status bar, hero, task grid, footer. Interior
pages, forms of any kind, email and anything touching
bank details are all out of scope.

Two standing content rules, both deliberate:

- **No office hours.** The office is unstaffed; the old "9–11AM Tu/We/Th" line
  would send members to a locked door.
- **No rate figures** until the May 2024 tariff is pulled from the PUC
  Interchange (Control Number 56520). Every published version of the rates has
  been wrong for years.

Outstanding placeholders are marked `TODO` in the source — run
`grep -rn TODO src/` to sweep them.
