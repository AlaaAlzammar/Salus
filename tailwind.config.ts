import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FEFEFC",
        gold: "#C9A24B",
        moss: {
          100: "#DCE5D5", // دوائر الأيقونات
          700: "#1C3324", // الأزرار والأقسام الغامقة
          900: "#0F2018", // العناوين والنصوص الغامقة
        },
      },
      fontFamily: {
        arabic: ["var(--font-almarai)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;