// generate-ase.js
import fs from 'fs';
import path from 'path';
import ase from 'ase-utils';

const jsonPath = path.resolve('./color-swatch.json');
const outPath = path.resolve('./colors.ase');
console.log('Reading');

if (!fs.existsSync(jsonPath)) {
  console.error('❌ color-swatch.json not found');
  process.exit(1);
}

const colors = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const swatches = Object.entries(colors).map(([name, hex]) => ({
  name,
  model: 'RGB',
  color: [
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255,
  ],
  type: 'global',
}));

const buffer = ase.encode({ colors: swatches });
fs.writeFileSync(outPath, Buffer.from(buffer));
console.log(
  `✅ ${path.basename(outPath)} created with ${swatches.length} colors.`,
);
