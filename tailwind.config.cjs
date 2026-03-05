/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0c",
          elevated: "#111113",
          card: "#161618",
          border: "rgba(255,255,255,0.06)",
        },
        accent: {
          DEFAULT: "#00d4aa",
          muted: "rgba(0, 212, 170, 0.12)",
          glow: "rgba(0, 212, 170, 0.2)",
        },
        text: {
          primary: "#fafafa",
          secondary: "#a1a1aa",
          muted: "#71717a",
        },
        secondary: "#a1a1aa",
        tertiary: "#161618",
      },
      boxShadow: {
        card: "0 4px 24px -1px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.04)",
        "card-hover": "0 24px 48px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,170,0.1)",
        glow: "0 0 40px -10px rgba(0, 212, 170, 0.3)",
      },
      screens: {
        xs: "480px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
