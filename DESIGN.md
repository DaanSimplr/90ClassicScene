# DESIGN.md

The single design reference for the site. The first build follows it; choices made during the build are rows 21 onward in the decision log.

## How this file was made

It merges two kinds of source under one rule:

- **The brand kit wins on colours and fonts.** Source: the "Japanese Sports Cars Site Brand Kit" artifact (https://claude.ai/artifact/C6W93mJuAXzdjmo6nGQmSm), palette version 2.
- **The references win on layout and feel.** Sources: five style references from sites the owner likes: Krea, Idle Finance, Ameba, Elektron and Wope.

Where the references disagree with each other, or the two sources collide, the choice made is recorded in the [decision log](#decision-log) at the end. Every later design choice gets a row there too.

No colour or typeface from the references is used anywhere. Their Suisse Intl, Open Sans, F37 Bolton, Neue Haas Grotesk, Rebond Grotesque, cyan, violet and blue values were all set aside.

## The idea

A Tokyo street at night, just after rain, with tuner cars as the brightest things in it. The page is violet-tinted black like wet asphalt. Photographs carry most of the colour. The interface stays quiet and close to invisible, and neon appears as a few small lights at full strength, never as a wash.

What each reference contributes:

| Reference | What is taken from it |
|---|---|
| **Krea** | Imagery owns the page, surrounded by dark empty space. Depth comes from surface tone, not shadow. Uppercase tracked eyebrow labels. A filled and a ghost button as a pair. |
| **Idle Finance** | One accent used as a signal, not a decoration. Flat cards with hairline borders. Large figures as the visual anchor of a section. A filter bar above a grid. |
| **Ameba** | Each section opens in two tiers: a small technical label, then the headline. Monospaced tracked type for data and metadata. Small corner radii. |
| **Elektron** | Photography is the only large colour source and runs edge to edge. Spec-sheet density inside sections. Square corners. A short accent rule beside section headings. |
| **Wope** | A line of light beneath hero imagery, so pictures look lit from below. Tall gaps between sections. Borders instead of elevation. |

---

## Colours

All values come from the brand kit. There is one theme, Night. There is no light theme.

| Token | Value | Use |
|---|---|---|
| `night-900` | `#07060f` | Page background. The ground everything sits on. |
| `night-800` | `#121022` | Raised surfaces: cards, spec panels, the signup box. |
| `night-600` | `#2b2748` | Decorative dividers and card outlines. Too faint for control borders. |
| `ink` | `#f5f3ff` | Primary text and headings. |
| `ink-muted` | `#a6a2c4` | Secondary text, captions, photo credits, input and ghost-button borders. |
| `neon-magenta` | `#ff1f8f` | Primary accent: the alert signup button fill (label in `night-900`) and the active nav marker. |
| `neon-cyan` | `#00d0ff` | Secondary accent: text links, focus rings, brand and era tags, hover glow on gallery tiles. |
| `burn-orange` | `#ff6a00` | Headline spec figures, the section accent rule and pull-quote marks. Small areas only. |
| `underglow-green` | `#39ff14` | "New" markers and the thin glow line under hero images. Never body text or large fills. |

### Colour rules

- At most two accent colours visible on screen at once. Pages should read as night with a few lights.
- One magenta element per screen area.
- No gradients between the neons. No glow on text.
- Glow is allowed in two places only: a soft `neon-cyan` glow on gallery tiles on hover, and the `underglow-green` line under hero images.
- Photographs are the main colour on every page. Interface chrome never competes with them.
- Text must reach a contrast of 4.5:1 on its background; large headings, control borders and focus rings 3:1.

---

## Fonts

All three families come from the brand kit and are hosted Google Fonts.

| Family | Typeface | Used for |
|---|---|---|
| Display | Chakra Petch | Headings and the site name |
| Sans | IBM Plex Sans | Running text and interface labels |
| Mono | IBM Plex Mono | Specs, chassis codes, engine codes, years, eyebrow labels and metadata |

### Type scale

The first six styles are the brand kit's, unchanged. The last four are additions the site needs, marked as such and logged.

| Style | Family | Size / line height | Weight | Notes |
|---|---|---|---|---|
| `display` | Display | 64px / 0.95 | 700 | Home hero only. Letter-spacing -0.01em. |
| `h1` | Display | 40px / 44px | 700 | Page titles. |
| `h2` | Display | 28px / 34px | 600 | Section headings. |
| `body` | Sans | 16px / 26px | 400 | Running text. |
| `caption` | Sans | 13px / 18px | 500 | Captions and photo credits, in `ink-muted`. |
| `spec` | Mono | 14px / 20px | 500 | Spec tables, codes and years. |
| `h3` *(added)* | Display | 20px / 26px | 600 | Card titles and sub-sections. |
| `lead` *(added)* | Sans | 18px / 28px | 400 | The opening paragraph of a page. |
| `eyebrow` *(added)* | Mono | 12px / 16px | 500 | Uppercase, letter-spacing +0.08em, `ink-muted`. |
| `figure` *(added)* | Mono | 40px / 44px | 500 | Headline spec figures, in `burn-orange`. |

### Type rules

- Headings are sentence case.
- On screens narrower than 640px, `display` drops to 40px, `h1` to 32px, `h2` to 24px and `figure` to 32px. Body text stays 16px.
- Running text is never wider than 68 characters per line.
- No italics for emphasis in interface text. No weight above 700.
- There is no logo. The site name is set in the display family at weight 700 in `ink`.

---

## Spacing

Base unit 4px. The brand kit defined four steps (`space-1`, `space-2`, `space-4`, `space-8`). The references call for taller section gaps, so the scale is extended.

| Token | Value | Use |
|---|---|---|
| `space-1` | 4px | Gap between a tag or marker and its label. |
| `space-2` | 8px | Gap between gallery tiles; padding inside tags. |
| `space-3` *(added)* | 12px | Gap between a heading and its eyebrow; rows in lists. |
| `space-4` | 16px | Gap between paragraphs and between sibling elements; page gutter on phones. |
| `space-6` *(added)* | 24px | Card and spec-panel padding; gap between cards in a grid. |
| `space-8` | 32px | Page gutter on desktop; gap between a section heading and its content. |
| `space-12` *(added)* | 48px | Gap between sub-sections. |
| `space-16` *(added)* | 64px | Gap between sections on phones. |
| `space-24` *(added)* | 96px | Gap between sections on desktop. |

**Rhythm:** tall between sections, tight within them. A section breathes at 96px; inside it, elements sit 12 to 24px apart.

### Corner radius

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 2px | Tags, inputs and gallery tiles. |
| `radius-md` | 6px | Buttons and cards. |
| `radius-lg` | 12px | Large panels and framed hero images. |

Corners stay nearly square. No pills.

### Elevation

There are no shadows anywhere. Depth comes from two things: the step from `night-900` to `night-800`, and a 1px `night-600` outline where a card needs an edge.

---

## Layout

- **Canvas:** full-bleed `night-900` at all times. Content sits in a centred column, 1200px at most. Hero and feature images run edge to edge, outside the column.
- **Gutters:** 32px on desktop, 16px on phones.
- **Navigation:** one top bar, no sidebar, no mega-menu, not sticky. Site name left, links right. On phones the links collapse behind a menu button.
- **Section opening:** every section starts with an eyebrow label, then the heading, with a short `burn-orange` rule (48px wide, 3px tall) above the eyebrow.
- **Grids:** model, brand and article cards sit in three columns on desktop, two on tablets, one on phones. Gallery tiles sit in four, three and two.
- **Article and history text:** a single column of 68 characters, left-aligned inside the content column.
- **Page pattern:** one large image, one band of compact cards or data, one heading with body text, then repeat.
- **Motion:** hover and focus transitions only, 150ms. Nothing moves on its own. All motion is switched off for visitors who ask their system for reduced motion.

---

## Components

### Navigation bar
Full-width on `night-900`, 64px tall, no border. Site name at left in display 700, 20px, `ink`. Links at right in sans 14px, weight 500, `ink-muted`, turning `ink` on hover. The current page's link is `ink` with a 2px `neon-magenta` line beneath it. "Get alerts" is an ordinary link here, not a button.

### Buttons
All buttons: `radius-md`, sans 15px weight 500, padding 10px by 20px, minimum height 44px. One filled button per screen area.

| Variant | Look | Used for |
|---|---|---|
| **Primary** | `ink` fill, `night-900` label. Hover: fill dims slightly. | The main action that is not a signup, such as "Browse the models". |
| **Alert** | `neon-magenta` fill, `night-900` label. | The alert signup submit button only. |
| **Ghost** | Transparent, 1px `ink-muted` border, `ink` label. Hover: `night-800` fill. | The second action beside a filled button. |

### Text link
`neon-cyan`, no underline at rest, underline on hover. Inside running text, links are underlined at rest so they can be told apart without colour.

### Focus ring
2px `neon-cyan` outline, offset 2px, on every interactive element reached by keyboard.

### Eyebrow label
The `eyebrow` style: mono 12px, uppercase, tracked, `ink-muted`. Sits 12px above its heading.

### Hero
A full-bleed image, at most 70% of the screen height, with a 1px `underglow-green` line along its bottom edge and a faint green glow beneath the line. Below the image, inside the content column and left-aligned: eyebrow, heading (`display` on Home, `h1` elsewhere), `lead` paragraph, then the button pair. Text is never laid over the image, so no photo can make it unreadable.

### Card (model, brand, article)
`night-800` fill, 1px `night-600` outline, `radius-md`, no shadow. Image flush to the top edge at a 3:2 ratio. Below it, 24px padding: eyebrow (brand or article type), `h3` title, one line of `body` in `ink-muted`. The whole card is the link. Hover: outline turns `ink-muted`.

### Tag
Mono 12px, uppercase, 1px `neon-cyan` border, `neon-cyan` text, `radius-sm`, padding 4px by 8px. Used for brand, era and generation.

### "New" marker
Mono 12px uppercase "NEW" in `underglow-green`, with a 6px green dot before it. No fill.

### "Model page coming" label
Mono 12px uppercase in `ink-muted`, 1px `night-600` border, `radius-sm`. The car's name beside it is plain text, not a link.

### Spec panel
`night-800` panel, `radius-md`, 24px padding. A table in the `spec` style: column headings in `eyebrow` style, rows divided by 1px `night-600` lines, figures right-aligned so they line up. Each row ends with its source as a link. On phones the table scrolls sideways inside the panel; the page itself never does.

### Headline figure
A number in the `figure` style in `burn-orange`, with its unit in `spec` style beside it and a label in `eyebrow` style beneath. Used three or four across at the top of a model page. No card around them.

### Filter bar
A row of text options in sans 14px weight 500, 24px apart. The active option is `ink` with a 2px `neon-cyan` line beneath; the rest are `ink-muted`. Used on the Gallery and the Models index. No filled chips.

### Gallery tile
Image only, `radius-sm`, 8px gaps. Hover: a soft `neon-cyan` glow and the caption appears beneath. Opens to a large view with the full caption and credit.

### Photo credit and caption
`caption` style in `ink-muted`, directly under the image, left-aligned.

### Illustration label
On every AI-generated image: a `night-900` strip along the bottom edge of the image carrying "ILLUSTRATION: AI-GENERATED" in `eyebrow` style. It is part of the image frame and cannot be hidden.

### Build entry
Text only, no image: `h3` build name, one paragraph of `body`, then a credit line in `caption` style with a link to where the build was first shown. Entries are divided by 1px `night-600` lines.

### Timeline
A vertical 1px `night-600` line with years in `spec` style at left and events at right. Each event names a car and links to its model page. Used on the 1990s page.

### Pull quote
`h2` style in `ink`, with a 3px `burn-orange` rule above it. No quotation-mark graphics.

### Source list
Numbered list in `caption` size, `ink-muted`, with links in `neon-cyan`. Sits at the end of every article and under every spec panel.

### Alert signup box
`night-800` panel, `radius-lg`, 32px padding. `h3` line, one line of `body` in `ink-muted`, then the email input and the Alert button in a row (stacked on phones), then a `caption` line with the promises.

### Text input
`night-900` fill, 1px `ink-muted` border, `radius-sm`, padding 12px by 16px, sans 16px in `ink`, placeholder in `ink-muted`. Focus: border and ring turn `neon-cyan`.

### Form messages
A line of `body` text under the form. Success messages are `ink`. Errors are `ink` with the word "Error:" in front and a 1px `burn-orange` rule to the left of the input, so the state never depends on colour alone.

### Footer
`night-900`, with a 1px `night-600` line above, 64px padding at the top and 32px at the bottom. Site name and tagline, then links in sans 14px `ink-muted`, then the corrections email, then "Site by Daan Simpelaar" in `caption` style.

---

## Imagery

- Photographs are used under licence and credited. Night and low-light shots are preferred where they exist.
- AI-generated images are for atmosphere only and always carry the illustration label. They are never used as reference for a real car.
- No icons are defined. Use text labels until an icon set is chosen.
- No decorative graphics, patterns or background textures.

---

## Starter tokens

```css
:root {
  /* Colours */
  --night-900: #07060f;
  --night-800: #121022;
  --night-600: #2b2748;
  --ink: #f5f3ff;
  --ink-muted: #a6a2c4;
  --neon-magenta: #ff1f8f;
  --neon-cyan: #00d0ff;
  --burn-orange: #ff6a00;
  --underglow-green: #39ff14;

  /* Fonts */
  --font-display: "Chakra Petch", "Arial Narrow", system-ui, sans-serif;
  --font-sans: "IBM Plex Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Radius */
  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 12px;

  /* Layout */
  --page-max-width: 1200px;
  --measure: 68ch;
}
```

---

## Decision log

Every design choice is recorded here, newest at the bottom. Add a row whenever something is decided or changed; never edit an old row, add a new one that replaces it.

| # | Date | Decision | Why | Decided by |
|---|---|---|---|---|
| 1 | 2026-11-12 | The brand kit wins on colours and fonts; the references win on layout and feel. | Owner's instruction. | Owner |
| 2 | 2026-11-12 | All nine colours and all three typefaces are taken from the brand kit unchanged. No colour or typeface from any reference is used. | Follows from 1. | Owner's rule |
| 3 | 2026-11-12 | Corners stay nearly square (2, 6 and 12px). No pill buttons. | The references split: Krea, Idle Finance and Wope use pills; Elektron uses square corners and Ameba 4 to 8px. The brand kit's radii side with Elektron and Ameba, and square corners suit a spec-heavy site about machines. | Claude, for the owner to confirm |
| 4 | 2026-11-12 | No shadows. Depth comes from surface tone and 1px outlines. | All five references agree. | References |
| 5 | 2026-11-12 | No radial glow washes or gradient blooms behind heroes, although Idle Finance, Ameba and Wope use them. | Glow is a colour matter, so the brand kit wins, and it says neon is never a wash. The brand kit's thin green underglow line gives the lit-from-below effect Wope gets from its gradient. | Claude, from the owner's rule |
| 6 | 2026-11-12 | The whole site is dark. No light sections, although Ameba alternates dark and light bands. | The brand kit has one theme and no light surface colours. | Brand kit |
| 7 | 2026-11-12 | Section gaps are 96px on desktop and 64px on phones, replacing the brand kit's 32px. Five spacing steps were added to the kit's four. | Spacing is layout, so the references win; they use 80 to 108px between sections. | References |
| 8 | 2026-11-12 | Four text styles were added to the kit's six: `h3`, `lead`, `eyebrow` and `figure`. They use the kit's own families. | The site has cards, opening paragraphs, section labels and headline figures that the kit's six styles don't cover. | Claude, for the owner to confirm |
| 9 | 2026-11-12 | Eyebrow labels and metadata are set in the mono family, uppercase and tracked. | Ameba and Krea both open sections with a small tracked label; the brand kit assigns codes and figures to mono. | References and brand kit |
| 10 | 2026-11-12 | Three button variants. The main browsing action is an `ink`-filled button; `neon-magenta` fills only the alert signup submit; the second action is a ghost button. | The brand kit reserves magenta for the subscribe button, but the approved copy makes "Browse the models" the main action on Home. A near-white filled button is what Krea, Idle Finance and Wope all use as the brightest control. | Claude, for the owner to confirm |
| 11 | 2026-11-12 | "Get alerts" in the navigation bar is a plain link, not a magenta button. | The bar is on every screen, and the kit allows one magenta element per screen area. The magenta is kept for the signup box and the active-page marker. | Claude, from the brand kit's rule |
| 12 | 2026-11-12 | "At most two accent colours in one view" is read as "on screen at once", not "on a whole page". | A model page needs orange figures, cyan links and a magenta signup button, but never in the same screenful. | Claude, for the owner to confirm |
| 13 | 2026-11-12 | Hero text sits below the image, left-aligned, never laid over it, although Krea centres text over the image. | The photos are licensed from many sources and can't be relied on to leave a dark, empty area for text. Left alignment follows Elektron. | Claude, for the owner to confirm |
| 14 | 2026-11-12 | Content column is 1200px at most; images run full-bleed outside it. | Idle Finance and Ameba use 1200px; Krea and Elektron run imagery edge to edge. | References |
| 15 | 2026-11-12 | The navigation bar is not sticky. | Krea, Idle Finance and Elektron all use a single bar that scrolls away, keeping the screen for imagery. | References |
| 16 | 2026-11-12 | Every section opens with a short `burn-orange` rule, an eyebrow label, then the heading. | The rule comes from Elektron's accent underline, the two-tier opening from Ameba. The kit limits orange to small areas, which this is. | References and brand kit |
| 17 | 2026-11-12 | Filters are text with an underline on the active option, not filled chips. | Krea's mode tabs. Filled chips would add a second filled control to the screen. | References |
| 18 | 2026-11-12 | AI-generated images carry a fixed label inside the image frame. | Agreed during the copy interview: illustrations must never be mistaken for photographs. | Owner |
| 19 | 2026-11-12 | Build entries are text only, with credit and a link. | Agreed during the copy interview: the photos stay with the people who made the builds. | Owner |
| 20 | 2026-11-12 | The owner approved this file as a whole, confirming rows 3, 8, 10, 12 and 13. | Review of the first draft. | Owner |
| 21 | 2026-11-12 | The three typefaces are served from the site itself (npm font packages), not from Google's servers. | The owner's build rule: no third-party embeds. It also keeps the privacy page's "no tracking" statement true. | Claude, from the owner's rule |
| 22 | 2026-11-12 | Until photos are supplied, every image slot shows a stand-in: the page's own name in outline type on a dark panel, mirrored beneath itself. Each slot takes a real photo later without layout changes. | There are no licensed photos yet, and inventing imagery was ruled out. The stand-in uses only words already in the copy. | Claude, for the owner to confirm |
| 23 | 2026-11-12 | Section eyebrow labels are running numbers (01, 02...) generated by the stylesheet. | The design calls for an eyebrow on every section, but the copy has no eyebrow text and only the owner's copy may be used. | Claude, for the owner to confirm |
| 24 | 2026-11-12 | On desktop, text sections put the heading in a left column and the text in a right column, still 68 characters wide. | Elektron's heading-plus-body block; it gives the spec-sheet rhythm without adding anything. | Claude |
| 25 | 2026-11-12 | The email link in the footer and in form error messages is underlined in `ink` or `ink-muted`, not `neon-cyan`. | Both sit beside the magenta signup button and an orange rule; cyan there would put three accents on screen. | Claude, from row 12 |
| 26 | 2026-11-12 | Placeholders from the copy, such as the hosting provider, are shown in mono type inside a dashed outline. | So unfinished text is obvious at a glance and cannot be mistaken for final copy. | Claude |
| 27 | 2026-11-12 | On phones the hero image is at most 38% of the screen height, not 70%. | At 70% the page title fell below the first screen. | Claude |
| 28 | 2026-11-12 | Known conflict, not resolved: at the top of pages with a hero image, a tall screen can show the magenta nav marker, the green underglow line and the first orange section rule together. | Rows 12 and 16 and the hero spec each require one of the three. Left for the owner to decide. | Open |
| 29 | 2026-11-13 | In the Tuning section, the shared intro line sits under the lead in caption type, each point ends with "(source N)" where the number links to a numbered source list below the text, and that list uses the same small caption style as the History sources. | The caveat about who the sources are belongs next to the claims but should not compete with them; numbered links keep the text readable while every claim stays one click from its source. | Claude |
| 30 | 2026-11-13 | Replaces the "never used as reference for a real car" part of the Imagery rules for hero images. Each model and brand page hero is an AI night restyle made from that page's licensed photograph, carrying the illustration label and the original photographer's credit. Cards and other smaller images use the same photograph, colour graded (darker, violet-tinted shadows, vignette), and stay photographs. The home and 1990s heroes are fully AI-generated atmosphere images. Image data lives in `src/data/images.js`. | Daylight and museum photos did not fit the night look, and Wikimedia Commons has usable night photos for only a few of the cars. Restyled heroes may differ from the real car in small details, so they are never used for specs. | Owner |
| 31 | 2026-11-13 | Brand pages, the 1990s page and articles end with their own "Sources" section: a numbered list in caption type, in the same split layout as the other sections, placed after the content and before the signup box. Each "(source N)" in the text links to its entry. | Same citation pattern as row 29, so readers learn it once; a section of its own keeps a long list from interrupting the reading. | Claude |
| 32 | 2026-11-13 | The 1990s timeline shows one row per year, the year in mono type on the left and that year's events on the right of the existing vertical rule. Each car named links to its model page, and each event cites its source. | Keeps the timeline shape already built, but with real dates instead of an undated list. | Claude |
| 33 | 2026-11-13 | Articles with a written body show one section per "####" heading in that body. Articles without one fall back to their outline. | The outline was a placeholder for the body; the fallback keeps a page useful if a future article is listed before it is written. | Claude |
| 34 | 2026-11-13 | Row 22's stand-ins are replaced by the images from row 30 on the home, 1990s, model and brand heroes, on model and brand cards, and in the Gallery. Article heroes and article cards keep the stand-in until they have images. | The images now exist; articles have none yet. | Claude |
| 35 | 2026-11-13 | Hero credit: the illustration strip sits on the image's bottom-left edge as specified, and the credit line ("AI illustration based on a photo by …") sits directly under the green line in `caption` style, inside the content column. Fully AI atmosphere heroes (home, 1990s) carry the strip only. Heroes crop slightly low (object-position 50% 65%) so wide screens keep the car's wheels. | Follows "Photo credit and caption" and "Illustration label". Credit wording chosen by the owner. | Owner (wording), Claude (layout) |
| 36 | 2026-11-13 | On cards, the photo credit sits at the foot of the card above a hairline, not directly under the image. The card is an article whose title link covers the whole card, so the credit's licence and source links still work. Hover: outline turns `ink-muted` as before, and the photo brightens and scales up 3%. | Directly under the image the credit came between picture and title and broke the card's reading order; at the foot, credits line up along a row. A link inside a link is not valid HTML. | Claude |
| 37 | 2026-11-13 | Gallery tiles show their caption and credit beneath the image at all times instead of on hover, and link to the model page (brand photos to the brand page) rather than opening a large view. Tiles keep `radius-sm`, an 8px column gap, and a `neon-cyan` glow on hover. The Illustrations section uses the same tiles, each with the strip. | Hover-only captions are invisible on touch screens and would hide the required credit; COPY.md says each photo links to its model page. A large view can be added later. | Claude |
| 39 | 2026-11-13 | Replaces part of row 35 and of the "Illustration label" spec: hero images no longer carry the "ILLUSTRATION: AI-GENERATED" strip. Model and brand heroes still say so in the credit line beneath them; the home and 1990s heroes carry no AI notice. Gallery tiles keep the strip. | Owner's request. | Owner |
| 38 | 2026-11-13 | Images are served through srcset in 640, 1200 and 1800 px copies plus the original (made by `scripts/image-sizes.mjs`). Heroes load first; everything else loads lazily. | A 2400 px original in a 400 px card wastes bandwidth on phones. | Claude |
| 40 | 2026-11-15 | Replaces "There is no logo" in Type rules and the "Site name at left in display 700, 20px" part of the Navigation bar spec. The site is called Shinyaso. The header shows the owner's logo artwork (SHIN YASŌ with 深夜走 in red and a drifting car on a road between the words) at 44px high, linking to Home, with "Shinyaso" as alt text. Its background is shifted to exactly `night-900` by `scripts/logo.mjs` so no box shows. Plain-text uses of the name (titles, footer, running text) read "Shinyaso". The logo's own cream and red sit outside the palette; they belong to the artwork, not the interface. | Owner's name and artwork; owner asked for the logo top left. | Owner (name, logo), Claude (size and background shift) |
| 41 | 2026-11-15 | Replaces the size, position and background part of row 40. The logo is a transparent WebP (made by `scripts/logo.mjs`): its flat background is removed, and the road between SHIN and YASŌ fades out towards its top and bottom ends instead of stopping at the crop edge. The lettering stays 44px tall and sits 20px below the header's centre line, so its foot (the kanji) hangs about 10px over the top of the hero image; it is drawn in front of it. The nav links stay centred in the 64px bar. | Owner's request: move the logo down 20px and fade the road out. | Owner (request), Claude (transparency, fade length) |
| 42 | 2026-11-15 | Logo colours: SHIN is pure white (`#ffffff`, was the artwork's cream) and YASŌ is the kanji's own red (`#903135`, measured from 深夜走). Done in `scripts/logo.mjs`; the original artwork is unchanged. | Owner's request: whiter letters and a different colour for YASŌ; owner chose the kanji red. | Owner |
| 43 | 2026-11-15 | Replaces the position in row 41: the logo moves up 30px, to 10px above the header's centre line. The lettering now starts at the top edge of the page and ends 20px above the hero, so nothing hangs over the hero any more; the faded top of the road runs off the top of the page. | Owner's request. | Owner |
| 44 | 2026-11-15 | Replaces the position in row 43: the logo moves down 15px, to 5px below the header's centre line. The lettering runs from 15px to 59px, ending 5px above the hero; the faded bottom of the road reaches a few pixels over the top of the hero. | Owner's request. | Owner |
| 45 | 2026-11-15 | Alert form states: after a successful signup the form shows the COPY.md "After submitting" line in `ink` (no "Error:" prefix, no orange rule) and empties the field; "already subscribed", "invalid address" and "something went wrong" use the existing error style. The button is disabled while the request runs. Without JavaScript the form still posts and the matching message is shown on return. The "After confirming" copy is shown by EmailOctopus on its own confirmation page (its "Success page" title and body); EmailOctopus documents no redirect back to the site after confirming. | Follows the Form messages spec; the confirmation page is EmailOctopus's. | Claude, for the owner to confirm |

### Still undecided

- Favicon (the logo is too wide to use as one).
- Icon set.
