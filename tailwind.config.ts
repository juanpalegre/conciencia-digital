import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0F6E56",
          light: "#E1F5EE",
          mid: "#9FE1CB",
        },
        blue: {
          DEFAULT: "#185FA5",
          light: "#E6F1FB",
        },
        "gray-text": "#444444",
        black: "#1A1A1A",
        bg: "#F7F7F5",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
