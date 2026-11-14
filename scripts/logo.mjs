// Makes the header logo from the owner's original artwork:
//   node scripts/logo.mjs
// Reads src/assets/shinyaso-logo-original.jpg (2000 x 620) and writes
// public/brand/shinyaso-logo-400.webp and -800.webp for the header srcset.
//
// The artwork sits on a flat #15161a background. That background is made
// transparent, so the logo can hang over the hero photo below the header
// without showing a box: each pixel's opacity follows how far it is from the
// background colour, reaching full opacity at FULL levels of difference, so
// the lettering, the red kanji and the car stay solid while the dark road
// becomes see-through. On the night-900 page it looks the same as the artwork.
//
// The road (a vertical strip between SHIN and YASŌ) is then faded out towards
// its top and bottom ends instead of stopping at the crop edge.
import sharp from 'sharp';

const SRC = 'src/assets/shinyaso-logo-original.jpg';
// Lettering spans rows 176-532; the crop leaves about 90px above and below it
// for the road to fade out in.
const CROP = { left: 200, top: 88, width: 1584, height: 530 };
const BG = [21, 22, 26];
const NOISE = 3; // JPEG noise around the background, made fully transparent
// Difference from the background that counts as fully opaque. The red kanji
// (about 145, 50, 55) is the darkest part that must stay solid.
const FULL = 100;
// Road strip in source columns (no lettering inside it), and the rows where it
// is fully visible; it fades to nothing at the crop's top and bottom edges.
const ROAD = { from: 884, to: 1037 };
const SOLID = { from: 230, to: 470 };

const smooth = (t) => t * t * (3 - 2 * t);
const roadFade = (y) => {
  const top = CROP.top;
  const bottom = CROP.top + CROP.height - 1;
  if (y < SOLID.from) return smooth(Math.max(0, (y - top) / (SOLID.from - top)));
  if (y > SOLID.to) return smooth(Math.max(0, (bottom - y) / (bottom - SOLID.to)));
  return 1;
};

const { data, info } = await sharp(SRC).extract(CROP).raw().toBuffer({ resolveWithObject: true });
const out = Buffer.alloc(info.width * info.height * 4);
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const i = (y * info.width + x) * info.channels;
    const o = (y * info.width + x) * 4;
    const diff = [0, 1, 2].map((c) => data[i + c] - BG[c]);
    const far = Math.max(...diff.map(Math.abs));
    let alpha = Math.min(1, Math.max(0, (far - NOISE) / (FULL - NOISE)));
    for (let c = 0; c < 3; c++) {
      // Colour that, at this opacity over the artwork background, gives back
      // the original pixel.
      const v = alpha > 0 ? BG[c] + diff[c] / alpha : BG[c];
      out[o + c] = Math.max(0, Math.min(255, Math.round(v)));
    }
    const sx = x + CROP.left;
    if (sx >= ROAD.from && sx <= ROAD.to) alpha *= roadFade(y + CROP.top);
    out[o + 3] = Math.round(alpha * 255);
  }
}

for (const width of [400, 800]) {
  const file = `public/brand/shinyaso-logo-${width}.webp`;
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .resize({ width })
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(file);
  console.log(file);
}
