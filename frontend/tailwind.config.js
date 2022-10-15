/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gappi-bg-01': '#252525',
        'gappi-02': '#EC1763',
      },
      boxShadow: {
        'gappi-shadow-01': '10px 10px 20px #101010'
      }
    },
  },
  plugins: [],
};
