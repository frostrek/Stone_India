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
          DEFAULT: '#b8955c',
          50: '#faf7f2',
          100: '#f2e8d3',
          200: '#e3d1a8',
          300: '#d1b67c',
          400: '#bf9b54',
          500: '#b8955c',
          600: '#9c7b46',
          700: '#7d6035',
          800: '#5f4626',
          900: '#43301a',
          950: '#25190d',
        },
        theme: {
          dark: '#252830',
          light: '#f4f5f7',
        },
        neutral: {
          50: '#f7f8fa',
          100: '#f0f1f4',
          200: '#e2e4e8',
          300: '#d1d4dc',
          400: '#9fa3b0',
          500: '#6b7080',
          600: '#4b4f58',
          700: '#393d45',
          800: '#252830',
          900: '#1c1e24',
          950: '#131418',
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
