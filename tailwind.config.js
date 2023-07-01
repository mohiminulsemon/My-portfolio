/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#E6CBA8',
          200: '#AA77FF'
        }
    },
  },
  plugins: [],
}
}

