/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': {
            transform: 'rotateZ(0deg) rotateY(180deg)'
          },
          '25%': {
            transform: 'rotateZ(-80deg) rotateY(80deg)'
          },
          '50%': {
            transform: 'rotateZ(-120deg) rotateY(180deg)'
          },
          '75%': {
            transform: 'rotateZ(-270deg) rotateY(270deg)'
          },
          '100%': {
            transform: 'rotateZ(360deg) rotateY(360deg)'
          }
        },
        unflip: {

        }
      }
    },
  },
  plugins: [],
}

