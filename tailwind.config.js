/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'customOrange': '#F57C00',
        'customOrangeDark': '#E65100',
        'customBlue': '#4D9DE0',
        'customBlueDark': '#2F80ED',
        'ebony-black': '#0b0b0b',
        'carbon-black': '#1a1a1a',
        'ink-black': '#111111',
      },
    },
  },
  plugins: [],
}

