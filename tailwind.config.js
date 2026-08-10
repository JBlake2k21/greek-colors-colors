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
        primary: "#003399",
        accent: "#CCA147",
        background: "#001B55",
        foreground: "#FCFFFE",
        royal: {
          950: "#000D28",
          900: "#001B55",
          800: "#002677",
          700: "#002D88",
          600: "#003399",
          500: "#1A4DA6",
        },
        purple: {
          950: "#000D28",
          900: "#001B55",
          800: "#002677",
          700: "#002D88",
          600: "#003399",
        },
        obsidian: {
          950: "#000D28",
          900: "#001B55",
          800: "#002266",
          700: "#002A77",
          600: "#003399",
        },
        gold: {
          600: "#A88133",
          500: "#CCA147",
          400: "#DDB45B",
          300: "#E7CA83",
          200: "#F3E2B5",
        },
        ivory: {
          DEFAULT: "#FCFFFE",
          soft: "#F1F2F1",
          muted: "#D5D8D7",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 40px -10px rgba(0, 27, 85, 0.9)",
        gold: "0 0 25px -5px rgba(204, 161, 71, 0.4)",
        royal: "0 0 30px -5px rgba(0, 51, 153, 0.5)",
        purple: "0 0 30px -5px rgba(0, 51, 153, 0.5)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #CCA147 0%, #E7CA83 30%, #A88133 70%, #F3E2B5 100%)",
        "obsidian-gradient": "linear-gradient(180deg, #001B55 0%, #000D28 100%)",
        "royal-gradient": "linear-gradient(135deg, #003399 0%, #001B55 100%)",
        "purple-gradient": "linear-gradient(135deg, #003399 0%, #001B55 100%)",
      }
    }
  },
  plugins: []
};
