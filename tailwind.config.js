/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue-600
          light: "#3B82F6", // blue-500
          dark: "#1E3A8A", // blue-900
        },
        secondary: {
          DEFAULT: "#9333EA", // purple-600
          light: "#A855F7", // purple-500
          dark: "#581C87", // purple-900
        },
      },
    },
  },
  plugins: [],
};
