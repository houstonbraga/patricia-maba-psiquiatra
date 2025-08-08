/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#1E4145",
        "custom-pink": "#E8CFCF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lorean: ["Lorean", "serif"],
      },
    },
  },
  plugins: [],
};
