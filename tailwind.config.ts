import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black:       "#0d0d0d",
        "black-nav": "#111111",
        green: {
          DEFAULT: "#5fd61e",
          light:   "#74e835",
          dark:    "#4ab816",
        },
        white:       "#ffffff",
        "off-white": "#f4f4f4",
        "light-gray":"#e8e8e8",
        "mid-gray":  "#999999",
        "dark-gray": "#333333",
        "text-dark": "#1a1a1a",
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
        body:    ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
