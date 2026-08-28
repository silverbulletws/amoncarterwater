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

## Changing the system status

Everything the status bar shows comes from [`src/data/status.json`](src/data/status.json).
There is no status markup anywhere else in the site, and there must not be —
when the tool Ross uses from his truck gets built, writing that one object is
its entire job.

```json
{
  "level": "normal",
  "headline": "All systems A-OK",
  "detail": "Water is safe to drink, no advisories in effect",
  "updated": "2026-08-21T09:14:00-05:00"
}
```

`level` is one of `normal`, `advisory`, `boil`, `outage`.

| level | appearance | placement |
|---|---|---|
| `normal` | tint background, filled dot | slim strip below the header |
| `advisory` | amber tint, warning triangle | slightly taller strip below the header |
| `boil` | red tint, alert octagon | full-width band **above** the header |
| `outage` | red tint, droplet-off | full-width band **above** the header |

Sample objects for all four states are in the comment at the top of
[`src/components/StatusBar.astro`](src/components/StatusBar.astro). There is no
editing interface yet; that is deliberately out of scope.

## Design tokens

All colour, type and radius tokens live in one `:root` block in
[`src/styles/global.css`](src/styles/global.css) and are mapped into Tailwind
through `@theme inline`, so `bg-acw-deep` resolves to `var(--acw-deep)`.
Change a token there and it changes everywhere.

Weights 400 and 500 only — nothing on this site is 700.

## Scope

Homepage only: layout, header, status bar, hero, task grid, footer. Interior
pages, forms of any kind, the status editing tool, email and anything touching
bank details are all out of scope.

Two standing content rules, both deliberate:

- **No office hours.** The office is unstaffed; the old "9–11AM Tu/We/Th" line
  would send members to a locked door.
- **No rate figures** until the May 2024 tariff is pulled from the PUC
  Interchange (Control Number 56520). Every published version of the rates has
  been wrong for years.

Outstanding placeholders are marked `TODO` in the source — run
`grep -rn TODO src/` to sweep them.
