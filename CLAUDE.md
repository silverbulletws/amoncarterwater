# Amon Carter Lake Water Supply website

Astro static site, deployed to Cloudflare Pages on every push to `main`. See
`README.md` for the build, the system status strip and the design tokens.

## Post editor

Staff edit system status updates and notices with the SBWS post editor
(https://app.silverbulletweb.com/sbws-post-editor/), which commits to `main`
as them. What it may edit is described in **`sbws.json`** (repository root);
the format is in `~/github/sbws-post-editor/docs/SITE-SETUP.md`.

- **Change the schema, change `sbws.json`.** Any change to a collection in
  `src/content.config.ts` (a field added, renamed, made required, an image
  moved) must be made in `sbws.json` in the same commit. `npm run build` runs
  `scripts/check-editor.mjs`, which fails when the two disagree.
- **Pull before working.** Staff publish straight to `main`, so `git pull`
  before starting and expect new posts you did not write.
- **Never regenerate posts.** Nothing may rewrite the files in
  `src/content/status/` or `src/content/notices/` in bulk (old import
  scripts, migrations): that would overwrite what staff have written.
- Posts are plain Markdown. Put images in a post with Markdown
  (`![alt](path)`), not HTML, so staff can edit them.

### Status posts

- Every page shows only the newest post by `date`
  (`src/components/StatusBar.astro`). Older posts are kept as a record.
- Each page renders `<StatusBar placement="band" />` before `<Header />` and
  `<StatusBar placement="strip" />` after it. `red` shows in the band slot (a
  sticky dark red band above the header; a script sets `--band-h` so the
  sticky header sits under it); `green`, `amber` and `blue` in the strip slot.
  A new page must have both slots.
- `date` is written without a timezone (`2026-09-17T09:00:00`) and means Bowie
  time. The frontmatter parser reads it as UTC, so StatusBar formats it in
  UTC to show the time as typed. Do not add a timezone conversion there.
- Adding a colour means a token set in `src/styles/global.css`, an entry in
  StatusBar's `presentation`, the schema enum and the `sbws.json` options.

### Notices

- One file per notice; the file name is the anchor on `/notices/`
  (`/notices/#bank-draft-delay`), so do not rename existing files.
- Dates (`2026-09-16`) are read as midnight UTC; `src/lib/notices.ts` formats
  them in UTC so the day does not shift.
- Body images uploaded in the editor go to `public/images/notices/`.
