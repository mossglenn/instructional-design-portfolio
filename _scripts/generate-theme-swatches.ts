// src/scripts/generate-theme-swatches.ts
import fs from 'fs';
import path from 'path';

const cssPath = path.resolve('./src/styles/global.css');
const outputPath = path.resolve('theme-swatches.html');

const theme: {
  swatches: { name: string; value: string }[];
  gradientswatches: { name: string; value: string }[];
} = {
  swatches: [],
  gradientswatches: [],
};

const css = fs.readFileSync(cssPath, 'utf-8');

const themeMatch = css.match(/@theme\s*\{([\s\S]*?)\n\}/);
if (!themeMatch) {
  throw new Error('No @theme block found in global.css');
}

const themeContent = themeMatch[1];
const lines = themeContent.split('\n');

const swatches: { name: string; value: string }[] = [];
for (const line of lines) {
  const match = line.match(/--(color-[\w-]+):\s*([^;]+);/);
  if (match) {
    const [, name, value] = match;
    //swatches.push({ name, value });
    theme.swatches.push({ name, value });
  }
}

const regexp = /--gradient-[^;]+/g;
const gradients = [...themeContent.matchAll(regexp)];
for (const gradient of gradients) {
  const gradientText = gradient[0];
  const gradientParts = gradientText.split(':');
  if (gradientParts.length === 2) {
    const name = gradientParts[0].trim().substring(2); // Remove '--' prefix
    const value = gradientParts[1].trim().replace(';', ''); // Remove trailing semicolon
    theme.gradientswatches.push({ name, value });
  }
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Theme Swatches</title>
  <style>
  :root {
  ${themeContent}

    body {
      font-family: sans-serif;
      background: #f8f8f8;
      color: #222;
      padding: 2rem;
    }
    .allcolors {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 100px;
        column-gap: 50px;
        row-gap: 4em;
    }

    .swatch {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.75rem;
    }
    .gradientswatch {
        display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 0.75rem;
      grid-column-end: span 2;
    }
    .swatch-label {
      font-size: 0.875rem;
      font-family: monospace;
    }
    .swatch-color {
    height: 100%;
    width: 100%;
      border-radius: 0.25rem;
      border: 1px solid #ccc;
    }
}
  </style>
</head>
<body>
    <h1>CSS Variables in @theme</h1>
    <div class="allcolors">
    ${theme.swatches
      .map(
        (s) =>
          `${
            s.name.endsWith('-50')
              ? '<div style="grid-column: 1 / -1; font-weight:bold;">Spectrum</div>'
              : ''
          }
        <div class="swatch" onclick="copyToClipboard('${s.name.replace(
          'color-',
          '',
        )}')">
        <div class="swatch-color" style="background: var(--${s.name});"></div>
        <div class="swatch-label">--${s.name}</div>
      </div>`,
      )
      .join('')}
    </div>
    <h1>CSS Gradients in @theme</h1>
    <div class="allcolors">
    ${theme.gradientswatches
      .map(
        (s) => `
          <div class="gradientswatch" onclick="copyToClipboard('${s.name}')">
            <div class="swatch-color" style="background: var(--${s.name});"></div>
            <div class="swatch-label">--${s.name}</div> 
          </div>`,
      )
      .join('')}
    </div>
  <script>
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text)
        .then(() => console.log('Copied:', text))
        .catch((err) => console.error('Failed to copy:', err));
    }
  </script>
</body>
</html>`;

fs.writeFileSync(outputPath, html, 'utf-8');
console.log(`Swatches written to: ${outputPath}`);
