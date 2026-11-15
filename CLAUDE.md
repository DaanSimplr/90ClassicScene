# CLAUDE.md

Address the user with Daan somewhere in every response.

A static showcase site about Japanese sports cars (90s JDM), in English, for enthusiasts who already know the cars. Built with Astro 7, no UI framework, plain CSS. The site is called Shinyaso; the header shows its logo image.

## Commands

- `npm run dev`: dev server on http://localhost:4321 (also the `site` entry in `.claude/launch.json`).
- `npm run build`: builds into `.vercel/output/` (the `@astrojs/vercel` adapter): every page prerendered as static HTML, plus one function for `/api/subscribe`. This is the main check: a missing COPY.md section or field makes the build fail with a clear error. There is no `npm run preview`; the Vercel adapter does not support it, so check pages in the dev server.
- `node scripts/image-sizes.mjs`: after adding or replacing an image in `public/images`, makes the `-640`, `-1200` and `-1800` copies that srcset uses. It uses `sharp`, which comes in through Astro and is not a direct dependency.

There are no tests and no linter. Development is on Windows.

## The four project documents

Read the relevant one before changing anything. They outrank your own judgement.

- **CONTEXT.md**: the facts the site is built from. Anything not in it is undecided; do not invent it. The site is hosted on Vercel's free Hobby plan, which is for non-commercial use: flag it if a change would add ads, affiliate links or paid content.
- **COPY.md**: every word on the site. Pages render text from this file at build time, so to change copy, edit COPY.md, not the `.astro` files. Do not write new copy the owner has not approved.
- **DESIGN.md**: colours, fonts, spacing, components, imagery rules, and an append-only **decision log**. Every new design choice gets a new row at the bottom; never edit an old row, add a row that replaces it. Note who decided (Owner, or "Claude, for the owner to confirm").
- **TODO.md**: parked items. **Do not build, write copy for, or act on anything in it** unless the owner asks for that item in chat.

## How the code is put together

- `src/lib/copy.js` parses COPY.md. `## Heading` lines become sections, `**Label:** text` lines become fields, `**H2: Name**` lines become page sections, and `---` ends a block. Pages look sections and fields up by their exact names (`sec('Toyota MR2').f('Title')`), so renaming a heading or a bold label in COPY.md breaks the page that uses it. Search `src/` for the name before renaming.
  - `[Bracketed text]` renders as a link only if the label is in `LINKS`; any other bracketed text is a placeholder and is shown in a dashed outline (for example `[SITE NAME]`).
  - `(source 2)` and `(sources 1, 3)` in the text become links to the numbered source list on that page.
  - An article's `**Body:**` field is split into sections at `####` headings.
- `src/lib/site.js` holds the registries: `NAV`, `FOOTER`, `MODELS`, `BRANDS`, `ARTICLES`, plus the label and credit-line helpers. A new model, brand or article needs an entry here and a matching COPY.md section; the dynamic routes in `src/pages/models/[slug].astro`, `brands/[slug].astro` and `articles/[slug].astro` are generated from these lists.
- `src/data/models.js` (`RESEARCH`): researched spec rows, history sources, tuning, kits and builds per model slug. Each value cites a source id. `null` shows as a dash and means no source states the value; never fill one in from memory.
- `src/data/images.js`: every image slot (`PAGE_IMAGES`, `MODEL_IMAGES`, `BRAND_IMAGES`) with alt text, licence, author and source. See the comment at the top of that file and DESIGN.md rows 30, 34 and 38.
- `src/components/`: small Astro components (Hero, Section, Card, Frame, Rows, Entries, Sources, Signup, AlertForm...). `src/layouts/Base.astro` is the page shell.
- `src/pages/api/subscribe.js`: the only on-demand route (`prerender = false`). `AlertForm.astro` posts the address here; it adds it to the EmailOctopus list as "pending" (EmailOctopus then sends the double opt-in email) and answers `ok`, `already`, `invalid` or `failed`, which the form maps to the COPY.md messages. A plain form post (no JavaScript) is redirected back to `#alert-<result>`. It needs `EMAILOCTOPUS_API_KEY` and `EMAILOCTOPUS_LIST_ID`: in `.env` locally (see `.env.example`; `.env` is gitignored) and in Vercel's Environment Variables. Never commit or print the key.
- `src/styles/global.css`: the single stylesheet. The design tokens at the top match DESIGN.md exactly; use the tokens, do not add new colours.

## Rules that are easy to break by accident

- **No invented facts.** Specs and history must come from a source that was actually read, and must be cited. If no source states something, leave the dash or say so. This applies to code comments and alt text too.
- **No third-party embeds or tracking, apart from Vercel Web Analytics.** Fonts are self-hosted through `@fontsource` packages, not Google Fonts. Vercel Web Analytics (`<Analytics />` in `Base.astro`) is the only analytics, added by the owner; do not add others (Speed Insights included) without asking. The privacy page lists exactly what it collects, so update the "Analytics and cookies" section in COPY.md if that changes.
- **Images:** card and gallery images are licensed Wikimedia Commons photos, colour graded, with a credit. Model and brand heroes are AI night restyles of those photos and must say so in the credit line under them. AI images are never used as a reference for what a car looks like or its specs.
- **Colour:** at most two accent colours on screen at once, one magenta element per screen area, no gradients between neons, no glow on text. Magenta fills only the alert signup button (and the active nav marker).
- **Email alerts:** sent with EmailOctopus (chosen by the owner), double opt-in only: never add contacts as "subscribed" directly. The privacy page says the address is used for nothing else and where the list is stored; keep it true if the signup or the service changes.
- **Personal details:** the owner's email in COPY.md is intentional (corrections contact). Do not add other personal data.

## Working with the owner

- The owner makes content and design decisions. When a rule in these docs does not cover a case, make the smallest sensible choice, log it in DESIGN.md as "Claude, for the owner to confirm", and mention it.
- Before saying a page change is done, run `npm run build` and look at the page in the dev server.
