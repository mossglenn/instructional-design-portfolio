import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    ignores: [
      '**/._portfolio-site-resources/**',
      'public/learning-objects/**',
      'dist/**',
      'node_modules/**',
      '_scripts/**',
      '.astro/**',
      '.vscode/**',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
]);