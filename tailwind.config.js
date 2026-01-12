/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue-grey': '#4A6274',
        'warm-sand': '#F4F1EA',
      },
      fontFamily: {
        'noto-sans-tc': ['Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

