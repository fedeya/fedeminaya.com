/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Roboto Slab', 'serif']
      },
      colors: {
        primary: '#060c14',
        alt: '#1d90ff'
      }
    }
  },
  plugins: []
};
