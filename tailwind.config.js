/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-dark': '#1B1743',
        'custom-gray': '#2A2F32',
      },
      letterSpacing: {
        'tight-custom': '-0.03em',
      },
      lineHeight: {
        '100': '1',
      }
    },
  },
  plugins: [],
}