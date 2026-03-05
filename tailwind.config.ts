import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "serif"], // Usado para os Títulos (Via Appia)
      },
      colors: {
        // --- PALETA CELEDONIO ADVOCACIA ---
        brand: {
          navy: "#0B102D",
          gold: "#967740",
          light: "#F1F5F2",
          slate: "#4F6D7A",
          blue: "#058ED9"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0B102D", // Navy como cor primária (Botões e Destaques)
          foreground: "#F1F5F2",
        },
        secondary: {
          DEFAULT: "#967740", // Dourado para detalhes de luxo/autoridade
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#F1F5F2",
          foreground: "#4F6D7A",
        },
        accent: {
          DEFAULT: "#058ED9",
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
export default config;