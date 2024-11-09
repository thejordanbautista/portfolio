/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // Include all JS/TS/JSX/TSX files in pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/JSX/TSX files in components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

