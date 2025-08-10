/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: " sans-serif",
        poppins: ['Poppins',],
        playfair: ['"Playfair Display"',],
        oswald: ['Oswald',],
      },
    },
  },
  plugins: [],
};
