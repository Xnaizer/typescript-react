/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        delicious: ["Delicious Handrawn", "cursive"],
        inter: ["Inter", "sans-serif"],
        playwrite: ["Playwrite IT Moderna", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
        staatliches: ["Staatliches", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
}