import { sec, quote, LINKS, bracketLabels } from './copy.js';

const wide = sec('Site-wide elements');

export const NAV = wide
  .f('Navigation')
  .split(' · ')
  .map((label) => ({ label, href: LINKS[label] }));

const footer = quote(wide.f('Footer'));
export const FOOTER = {
  tagline: footer[0],
  links: footer[1].split(' · ').map((label) => ({ label, href: LINKS[label] })),
  corrections: footer[2],
  author: footer[3],
  copyright: footer[4],
  // The owner's offer to build websites. Promotes a paid service, which the
  // owner chose to accept on Vercel's non-commercial Hobby plan (CONTEXT.md).
  hire: footer[5],
};
// The site name, taken from the footer line in COPY.md. The header shows the
// logo image instead and uses this as its alt text.
export const SITE_NAME = FOOTER.tagline.split(':')[0];

const signup = quote(wide.f('Alert signup box'));
// First quoted paragraph is the per-page line (a placeholder) then the fixed line.
const [inputLabel, buttonLabel] = bracketLabels(signup[1]);
export const SIGNUP = { body: signup[0].split('\n')[1], inputLabel, buttonLabel, caption: signup[2] };

export const LABELS = {
  coming: wide.f('Label on cars without a page yet'),
  illustration: wide.f('Label on AI-generated images'),
};
// The strip on every AI image carries the label up to its first comma:
// "Illustration: AI-generated" (shown in capitals by the eyebrow style).
LABELS.strip = LABELS.illustration.split(',')[0];

// Credit lines, filled from the image data in src/data/images.js.
// [photographer] is plain text; [licence] and [source] become links.
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fillCredit = (template, c) =>
  template
    .replace('[photographer]', esc(c.author))
    .replace('[licence]', `<a href="${esc(c.licenseUrl)}" rel="license noopener">${esc(c.license)}</a>`)
    .replace('[source]', `<a href="${esc(c.source)}" rel="noopener">${esc(c.sourceName)}</a>`);
const photoLine = wide.f('Photo credit line');
const gradedNote = wide.f('Note after the credit on colour-graded photos');
const aiLine = wide.f('Credit line under AI images made from a photo');

// HTML credit for an image from images.js, or '' when none is needed
// (fully AI atmosphere images carry the label only).
export function creditHtml(img) {
  if (!img) return '';
  if (img.basedOn) return fillCredit(aiLine, img.basedOn);
  if (img.ai || !img.author) return '';
  return `${fillCredit(photoLine, img)}.${img.modified ? ` ${gradedNote}` : ''}`;
}

const model = (slug, name, brand, short, related, mark = short) => {
  const s = sec(name);
  const codes = (s.f('Title').match(/\(([^)]+)\)/) || [null, ''])[1].split(', ').filter(Boolean);
  return { slug, name, brand, short, related, mark, codes, href: `/models/${slug}/`, s };
};

export const MODELS = [
  model('mitsubishi-3000gt', 'Mitsubishi 3000GT', 'Mitsubishi', '3000GT', 'nissan-skyline-gt-r'),
  model('toyota-mr2', 'Toyota MR2', 'Toyota', 'MR2', 'toyota-supra'),
  model('honda-integra', 'Honda Integra', 'Honda', 'Integra', 'honda-nsx'),
  model('nissan-silvia', 'Nissan Silvia', 'Nissan', 'Silvia', 'nissan-skyline-gt-r'),
  model('toyota-supra', 'Toyota Supra', 'Toyota', 'Supra', 'toyota-mr2'),
  model('nissan-skyline-gt-r', 'Nissan Skyline GT-R', 'Nissan', 'Skyline GT-R', 'nissan-silvia', 'GT-R'),
  model('mazda-rx-7', 'Mazda RX-7', 'Mazda', 'RX-7', 'honda-nsx'),
  model('honda-nsx', 'Honda NSX', 'Honda', 'NSX', 'honda-integra'),
];
export const modelBy = (key, value) => {
  const m = MODELS.find((x) => x[key] === value);
  if (!m) throw new Error(`No model with ${key} "${value}"`);
  return m;
};

export const BRANDS = ['Toyota', 'Nissan', 'Honda', 'Mazda', 'Mitsubishi', 'Subaru'].map((name) => ({
  name,
  slug: name.toLowerCase(),
  href: `/brands/${name.toLowerCase()}/`,
  s: sec(name),
}));
export const brandBy = (name) => BRANDS.find((b) => b.name === name);

const ALL = MODELS.map((m) => m.slug);
const article = (slug, section, mark, cars) => {
  const s = sec(section);
  return { slug, mark, cars, href: `/articles/${slug}/`, s, h1: s.f('H1') };
};
export const ARTICLES = [
  article('280-ps-agreement', 'Article: The 280 PS agreement', '280 PS', ['nissan-skyline-gt-r', 'toyota-supra']),
  article('rb26-vs-2jz', 'Article: RB26 and 2JZ', 'RB26 / 2JZ', ['nissan-skyline-gt-r', 'toyota-supra']),
  article('90s-japanese-body-kits', 'Article: The aero houses', 'Aero', ALL),
  article('chassis-codes-explained', 'Article: Chassis codes explained', 'BNR32', ALL),
  article('history-of-drifting', 'Article: A history of drifting', 'D1', ['nissan-silvia']),
];
