import fs from 'fs';
import path from 'path';

export function getScImages() {
  const imagesDir = path.join(process.cwd(), 'public/assets/school');
  const imageFiles = fs.readdirSync(imagesDir);
  return imageFiles.map(file => `/assets/school/${file}`);
}