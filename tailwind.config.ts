import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F3EA",
        sand: "#EFEBE0",
        moss: {
          50: "#EEF2EA",
          100: "#DCE5D5",
          200: "#B9CBAE",
          300: "#8FA97F",
          400: "#5F7F52",
          500: "#3E5E35",
          600: "#274327",
          700: "#1C3324",
          800: "#152A1E",
          900: "#0F2018",
        },
        gold: "#C9A24B",
      },
      fontFamily: {
        arabic: ["var(--font-tajawal)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(15, 32, 24, 0.25)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
