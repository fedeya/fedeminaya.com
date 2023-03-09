/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#060c14',
        alt: '#1d90ff'
      },
      screens: {
        xs: '475px'
      }
    }
  },
  plugins: []
};
