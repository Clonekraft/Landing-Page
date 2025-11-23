/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enables .dark and .light classes on <html>
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#C1A170", // your gold
          dark: "#E8D0A9",
          light: "#A67C52",
        },
        neon: "#00ffea",
        background: {
          dark: "#0a0a0a",
          light: "#f8f8f8",
        },
        surface: {
          dark: "#111111",
          light: "#ffffff",
        },
        text: {
          dark: "#ffffff",
          light: "#1a1a1a",
        },
        bronze: {
          50: "#f9f4ed",
          100: "#f1e5d3",
          200: "#e2c9a7",
          300: "#d4ad7b",
          400: "#c8925e",
          500: "#C1A170", // your exact color
          600: "#b0895a",
          700: "#8f6d47",
          800: "#6e5438",
          900: "#4c3b2a",
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px #C1A170" },
          "100%": { boxShadow: "0 0 40px #C1A170, 0 0 60px #C1A170" },
        },
      },
    },
  },
  plugins: [],
};
