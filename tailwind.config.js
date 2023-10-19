/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'alumni': ['Young Serif', 'sans-serif'],
      'serif': ['serif'],
      'serifBold': ['serifbold'],
      'calde': ['Caladea', 'serif']
    },
    extend: {},
  },
  plugins: [],
}

