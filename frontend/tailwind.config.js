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
        'gappi-03': '#1B202D',
        'gappi-04': '#3D4354',
        'gappi-05': '#292F3F',
        'gappi-06': '#B3B9C9'
      },
      boxShadow: {
        'gappi-shadow-01': '10px 10px 20px #101010',
      },
      backgroundImage: {
        'gappi-gradient-01':
          'linear-gradient(35.9deg, #1d1d1d 38.66%, #a1083f 112.51%);',
      },
    },
  },
  plugins: [],
};
