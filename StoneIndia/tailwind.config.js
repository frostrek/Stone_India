/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#f26522',
          50: '#fff6f0',
          100: '#ffebd4',
          200: '#ffd3ab',
          300: '#ffb378',
          400: '#ff8b40',
          500: '#f26522',
          600: '#d94c0b',
          700: '#b33800',
          800: '#8c2800',
          900: '#661b00',
          950: '#400f00',
        },
        theme: {
          dark: '#161715',
          light: '#f5f4ef',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}
