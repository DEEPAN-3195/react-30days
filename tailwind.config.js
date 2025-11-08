/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6EE7B7", // Light mint
          DEFAULT: "#10B981", // Emerald main
          dark: "#065F46", // Deep forest green
          hover: "#34D399", // Mid-light hover
          soft: "#D1FAE5", // Subtle green tint background
          contrast: "#FFFFFF", // White text on green bg
        },
        secondary: {
          light: "#5EEAD4", // Soft teal
          DEFAULT: "#14B8A6", // Teal main accent
          dark: "#0F766E", // Dark teal
          hover: "#2DD4BF", // Gentle hover glow
          soft: "#CCFBF1", // Light aqua tint
          contrast: "#F0FDFA", // Off-white text
        },
        neutral: {
          light: "#ECFDF5", // Light minty white
          dark: "#0F172A", // Deep bluish-gray (dark mode)
          card: "#1E293B", // Card bg for dark mode
          border: "#164E63", // Muted teal border
          textLight: "#A7F3D0", // Text in dark mode
          textDark: "#064E3B", // Text for light mode
        },
      },
    },
  },
  plugins: [],
};
