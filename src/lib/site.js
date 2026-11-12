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
};
// The site has no name yet: this is the "[SITE NAME]" placeholder from COPY.md.
export const SITE_NAME = FOOTER.tagline.split(':')[0];

const signup = quote(wide.f('Alert signup box'));
// First quoted paragraph is the per-page line (a placeholder) then the fixed line.
const [inputLabel, buttonLabel] = bracketLabels(signup[1]);
export const SIGNUP = { body: signup[0].split('\n')[1], inputLabel, buttonLabel, caption: signup[2] };

export const LABELS = {
  coming: wide.f('Label on cars without a page yet'),
  illustration: wide.f('Label on AI-generated images'),
};

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
