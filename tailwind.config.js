// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0033A0",
        accent: "#D4AF37",
        background: "#080B10",
        foreground: "#FAF9F6",
        royal: {
          950: "#030B1A",
          900: "#0A1428",
          800: "#0F2142",
          700: "#143266",
          600: "#0033A0",
          500: "#1E50BC",
        },
        purple: {
          950: "#030B1A",
          900: "#0A1428",
          800: "#0F2142",
          700: "#143266",
          600: "#0033A0",
        },
        obsidian: {
          950: "#05070A",
          900: "#080B10",
          800: "#0F131C",
          700: "#171D2A",
          600: "#222B3D",
        },
        gold: {
          600: "#B38728",
          500: "#D4AF37",
          400: "#E5C158",
          300: "#F3E5AB",
          200: "#FCF6BA",
        },
        ivory: {
          DEFAULT: "#FAF9F6",
          soft: "#F3F0E6",
          muted: "#D8D4C8",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 40px -10px rgba(0, 0, 0, 0.8)",
        gold: "0 0 25px -5px rgba(212, 175, 55, 0.35)",
        royal: "0 0 30px -5px rgba(0, 51, 160, 0.4)",
        purple: "0 0 30px -5px rgba(0, 51, 160, 0.4)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #BF953F 0%, #FCF6BA 30%, #B38728 70%, #FBF5B7 100%)",
        "obsidian-gradient": "linear-gradient(180deg, #0F131C 0%, #080B10 100%)",
        "royal-gradient": "linear-gradient(135deg, #0A1428 0%, #080B10 100%)",
        "purple-gradient": "linear-gradient(135deg, #0A1428 0%, #080B10 100%)",
      }
    }
  },
  plugins: []
};
