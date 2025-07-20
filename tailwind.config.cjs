// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html',
    'node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      willChange: {
        transform: 'transform',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
