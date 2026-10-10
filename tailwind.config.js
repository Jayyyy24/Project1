/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#f0fbf4", 100: "#dcfae6", 200: "#bbf7cf", 300: "#86efac",
          400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d",
          800: "#166534", 900: "#14532d", 950: "#052e16",
        },
        blush: {
          50: "#fff0f3", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af",
          400: "#fb7185", 500: "#ff5c8d", 600: "#e11d48", 700: "#be123c",
        },
        cream: {
          100: "#fffdf9", 200: "#fff9f0", 300: "#fef3e2", 400: "#fdeacb",
        },
      },
      fontFamily: {
        bubble: ["Fredoka", "Quicksand", "sans-serif"],
        sans: ["Fredoka", "Quicksand", "sans-serif"],
      },
      boxShadow: {
        "cute-pink": "0 8px 24px -4px rgba(255,92,141,0.25)",
        "cute-green": "0 8px 24px -4px rgba(34,197,94,0.25)",
        "cute-card": "0 10px 30px -5px rgba(22,101,52,0.08)",
        "3d-pink": "0 5px 0 0 #e11d48",
        "3d-green": "0 5px 0 0 #15803d",
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
    },
  },
  plugins: [],
};
