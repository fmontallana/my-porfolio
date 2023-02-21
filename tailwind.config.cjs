/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-300px * 3))' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(calc(-300px * 3))' },
          '100%': { transform: 'translateY(0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-315px * 3))' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(calc(-310px * 4))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scrollUp: 'scrollUp 30s linear infinite',
        scrollDown: 'scrollDown 30s linear infinite',
        scrollLeft: 'scrollLeft 30s linear infinite',
        scrollRight: 'scrollRight 30s linear infinite',
      }
    },
  },
  plugins: [],
}
