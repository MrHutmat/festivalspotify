/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkturkish: "#45a29e",
        turkish: "#66fcf1",
        oldthemegray: "#c5c6c7",
        themeblack: "#0b0c10",
        oldthemelight: "#1f2833",
        themepink: "#f652a0",
        themegray: "#1e1e1e",
        themelight: "#282828",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
