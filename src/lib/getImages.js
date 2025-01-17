import fs from 'fs';
import path from 'path';

export function getImages() {
  const imagesDir = path.join(process.cwd(), 'public/assets/carousel');
  const imageFiles = fs.readdirSync(imagesDir);
  return imageFiles.map(file => `/assets/carousel/${file}`);
}