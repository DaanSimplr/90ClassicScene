// Makes the smaller copies of every image in public/images that the pages
// load through srcset. Run after adding or replacing an image:
//   node scripts/image-sizes.mjs
// For "name.jpg" it writes "name-640.jpg", "name-1200.jpg" and "name-1800.jpg"
// next to it (never wider than the original). The original stays as the
// largest size.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

export const WIDTHS = [640, 1200, 1800];
const root = path.resolve('public/images');
const sized = new RegExp(`-(${WIDTHS.join('|')})\\.jpg$`);

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.jpg') && !sized.test(p) ? [p] : [];
  });

for (const file of walk(root)) {
  const { width } = await sharp(file).metadata();
  for (const w of WIDTHS) {
    if (w >= width) continue;
    const out = file.replace(/\.jpg$/, `-${w}.jpg`);
    await sharp(file).resize({ width: w }).jpeg({ quality: 80, mozjpeg: true }).toFile(out);
  }
  console.log(path.relative(root, file), width);
}
