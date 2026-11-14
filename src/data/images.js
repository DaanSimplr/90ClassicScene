// Image slots for every page with a hero frame or a card frame.
//
// Each car has two versions of one licensed Wikimedia Commons photo:
//   card  The real photo, colour graded (darkened, violet-tinted shadows,
//         vignette) to match the night look. Still a photograph; show its
//         credit under it (DESIGN.md: Photo credit and caption).
//   hero  An AI night restyle (Higgsfield, GPT Image 2.6) made with that same
//         photo as reference. It is an illustration: it must carry the
//         "ILLUSTRATION: AI-GENERATED" label (DESIGN.md: Illustration label)
//         and still credit the photo it was made from. Details can differ
//         from the real car, so never use it as a reference for specs.
// See DESIGN.md decision log row 30.
//
// Licence notes: CC BY and CC BY-SA require the author, licence and a note
// that the image was changed. CC BY-SA also requires that the changed image
// is shared under CC BY-SA. CC0 has no conditions.
// Files live in /public/images, so `src` is the public URL. Smaller copies
// (name-640.jpg, -1200, -1800) are made by scripts/image-sizes.mjs.
//
// caption     Gallery caption in the COPY.md format "[Year] [Make] [Model]
//             [Variant] in [colour]", from the Commons file name and
//             description; parts that are not known are left out.
// generation  Gallery filter value; matches the codes in the model page title.
// position    CSS object-position for crops, where the centre would cut the car.

const CC0 = { license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/' };
const BY2 = { license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/' };
const BY4 = { license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' };
const BYSA4 = { license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' };
const commons = (file) => 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(file.replace(/ /g, '_'));

const SIZES = [640, 1200, 1800];
// srcset for an image whose original is `width` pixels wide.
export const srcset = (src, width = 2400) =>
  [...SIZES.filter((w) => w < width).map((w) => `${src.replace(/\.jpg$/, `-${w}.jpg`)} ${w}w`), `${src} ${width}w`].join(', ');

// dir: 'models' or 'brands'; carName: what the photo shows, used in alt text.
const car = (dir, slug, carName, view, author, licence, file, extra = {}) => {
  const { caption, generation, width = 2400, heroPosition, cardPosition } = extra;
  const credit = { author, ...licence, source: commons(file), sourceName: 'Wikimedia Commons' };
  return {
    caption,
    generation,
    card: {
      src: `/images/${dir}/${slug}.jpg`,
      width,
      alt: `${carName}, ${view}`,
      ai: false,
      modified: 'Colour graded',
      position: cardPosition,
      ...credit,
    },
    hero: {
      src: `/images/${dir}/${slug}-hero.jpg`,
      width: 2400,
      alt: `${carName} at night on a wet street (AI illustration based on a photograph)`,
      ai: true,
      modified: 'AI night restyle of the original photograph',
      position: heroPosition,
      basedOn: credit,
    },
  };
};

const illustration = (src, alt, position) => ({ src, width: 2400, alt, ai: true, position });

export const PAGE_IMAGES = {
  home: illustration(
    '/images/home-hero.jpg',
    'A narrow Tokyo backstreet at night after rain, two 1990s sports coupes with their lights on, neon signs reflected in the wet asphalt',
    '30% 60%',
  ),
  'the-1990s': illustration(
    '/images/the-1990s.jpg',
    'A night car meet at a Japanese expressway parking area under sodium lights, a row of 1990s sports coupes on wet pavement',
  ),
};

export const MODEL_IMAGES = {
  'mitsubishi-3000gt': car('models', 'mitsubishi-3000gt', 'Red 1992 Mitsubishi 3000GT VR-4', 'front three-quarter view', 'Cutlass', CC0, '1992 Mitsubishi 3000GT VR-4 in Monza Red, front right, 09-20-2025.jpg', {
    caption: '1992 Mitsubishi 3000GT VR-4 in Monza Red',
    generation: 'GTO',
  }),
  'toyota-mr2': car('models', 'toyota-mr2', 'Red Toyota MR2 SW20 G-Limited', 'front three-quarter view', 'FotoSleuth', BY2, '1989-1991 Toyota MR2 (SW20) G-Limited coupe (13813691874).jpg', {
    caption: '1989–1991 Toyota MR2 (SW20) G-Limited in red',
    generation: 'SW20',
  }),
  'honda-integra': car('models', 'honda-integra', 'White 1997 Honda Integra Type R (DC2)', 'front three-quarter view', 'Calreyn88', BYSA4, 'Honda Integra Type R 1997.jpg', {
    caption: '1997 Honda Integra Type R (DC2) in white',
    generation: 'DC2',
  }),
  'nissan-silvia': car('models', 'nissan-silvia', 'Black Nissan Silvia S15 Spec R', 'front three-quarter view', 'Charles from Port Chester, New York', CC0, 'Nissan Silvia S15 Spec R (2001) (54804819625).jpg', {
    caption: '2001 Nissan Silvia S15 Spec R in black',
    generation: 'S15',
  }),
  'toyota-supra': car('models', 'toyota-supra', 'Tuned white Toyota Supra A80', 'front three-quarter view at night', 'Tokumeigakarinoaoshima', CC0, 'Tuned Toyota Supra (A80) at night front.JPG', {
    caption: 'Tuned Toyota Supra (A80) in white',
    generation: 'A80',
  }),
  'nissan-skyline-gt-r': car('models', 'nissan-skyline-gt-r', 'Bayside Blue Nissan Skyline GT-R R34 V-Spec II', 'rear view at night in Tokyo with the round tail lights lit', 'David Kernan', BY4, 'Rearview of a Nissan Skyline in Tokyo.jpg', {
    caption: 'Nissan Skyline GT-R (R34) V-Spec II in Bayside Blue',
    generation: 'R34',
  }),
  'mazda-rx-7': car('models', 'mazda-rx-7', 'Silver Mazda RX-7 Spirit R (FD3S)', 'front three-quarter view at the Mazda Museum', 'Aos.1905', BY4, 'Mazda RX-7 Spirit R (FD3S) (front three-quarter view) at Mazda Museum.jpg', {
    caption: 'Mazda RX-7 Spirit R (FD3S) in silver',
    generation: 'FD',
    width: 1920,
  }),
  'honda-nsx': car('models', 'honda-nsx', 'Red 1991 Honda NSX (NA1)', 'front three-quarter view at the Toyota Automobile Museum', '先従隗始', CC0, 'Honda E-NA1 NSX (24010610231).jpg', {
    caption: '1991 Honda NSX (NA1) in red',
    generation: 'NA1',
  }),
};

export const BRAND_IMAGES = {
  toyota: car('brands', 'toyota', 'Red 1995 Toyota Celica GT-Four (ST205)', 'front three-quarter view', 'Vauxford', BYSA4, '1995 Toyota Celica GT-Four (ST205) 2.0.jpg', {
    caption: '1995 Toyota Celica GT-Four (ST205) in red',
  }),
  nissan: car('brands', 'nissan', 'White 1998 Nissan Fairlady Z (Z32) 2by2 Twin Turbo', 'front three-quarter view', 'TTTNIS', CC0, '1998 Nissan Fairlady Z 2by2 300ZX Twin Turbo T-Bar Roof.jpg', {
    caption: '1998 Nissan Fairlady Z (Z32) 2by2 Twin Turbo in white',
  }),
  honda: car('brands', 'honda', 'White Honda Civic Type R (EK9)', 'rear three-quarter view', 'Ethan Llamas', BYSA4, 'Honda Civic Type R EK9 white (2).jpg', {
    caption: 'Honda Civic Type R (EK9) in white',
  }),
  mazda: car('brands', 'mazda', 'White Eunos Roadster (Mazda MX-5, NA)', 'front view', 'Tokumeigakarinoaoshima', CC0, 'Eunos Roadster (NA) front.JPG', {
    caption: 'Eunos Roadster (Mazda MX-5, NA) in white',
  }),
  mitsubishi: car('brands', 'mitsubishi', 'White Mitsubishi Lancer Evolution VI', 'front three-quarter view', 'Alexander-93', BYSA4, 'Mitsubishi Lancer Evolution VI IMG 0346.jpg', {
    caption: 'Mitsubishi Lancer Evolution VI in white',
  }),
  subaru: car('brands', 'subaru', 'Blue 1998 Subaru Impreza 22B STi', 'front three-quarter view', 'MrWalkr', BYSA4, '1998 Subaru Impreza 22B STi.jpg', {
    caption: '1998 Subaru Impreza 22B STi in blue',
  }),
};
