/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif','"DM Serif Display"'],
      },
      backgroundImage: {
        'gold-premium-new': 'linear-gradient(180deg, #E1B763 0%, #B18940 100%)',
      },
    },
  },
  plugins: [],
}