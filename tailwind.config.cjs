/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollUp1: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(calc(-350px * 3))' }
        },
        scrollUp2: {
          '0%': { transform: 'translateY(calc(350px * 3))' },
          '100%': { transform: 'translateY(0%)' }
        },
        scrollDown1: {
          '100%': { transform: 'translateY(0)' },
          '0%': { transform: 'translateY(calc(-350px * 3))' }
        },
        scrollDown2: {
          '100%': { transform: 'translateY(calc(350px * 3))' },
          '0%': { transform: 'translateY(0%)' }
        },
        scrollLeft1: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        scrollLeft2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        // scrollRight1: {
        //   '0%': { transform: 'translateX(0%)' },
        //   '100%': { transform: 'translateX(-100%)' }
        // },
        // scrollRight2: {
        //   '0%': { transform: 'translateX(100%)' },
        //   '100%': { transform: 'translateX(0%)' }
        // },
      },
      animation: {
        scrollUp1: 'scrollUp1 30s linear infinite',
        scrollUp2: 'scrollUp2 30s linear infinite',
        scrollDown1: 'scrollDown1 15s linear infinite',
        scrollDown2: 'scrollDown2 15s linear infinite',
        scrollLeft1: 'scrollLeft1 15s linear infinite',
        scrollLeft2: 'scrollLeft2 15s linear infinite',
        // scrollRight1: 'scrollRight1 10s linear infinite',
        // scrollRight2: 'scrollRight2 10s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
