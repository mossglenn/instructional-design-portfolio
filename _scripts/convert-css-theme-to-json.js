// convert-css-theme-to-json.js
import fs from 'fs';
import path from 'path';

const cssFile = path.resolve('./src/styles/global.css');
console.log('Reading CSS from:', cssFile);
const outputJson = path.resolve('./color-swatch.json');

const hslToHex = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))));
  return `#${f(0).toString(16).padStart(2, '0')}${f(8)
    .toString(16)
    .padStart(2, '0')}${f(4).toString(16).padStart(2, '0')}`;
};

const css = fs.readFileSync(cssFile, 'utf-8');
const colorRegex =
  /--color-[\w-]+:\s*hsl\(([\d.]+),\s*([\d.]+)%,\s*([\d.]+)%\)/g;

const colors = {};
let match;
while ((match = colorRegex.exec(css))) {
  const [full, h, s, l] = match;
  const name = full.match(/--color-([\w-]+):/)[1];
  colors[name] = hslToHex(Number(h), Number(s), Number(l));
}

fs.writeFileSync(outputJson, JSON.stringify(colors, null, 2));
console.log('✅ Colors exported to color-swatch.json');
