/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#050506",
          elevated: "#0d0d10",
          card: "#121216",
          border: "rgba(255,255,255,0.07)",
        },
        accent: {
          DEFAULT: "#c8ff4a",
          muted: "rgba(200, 255, 74, 0.1)",
          glow: "rgba(200, 255, 74, 0.18)",
        },
        text: {
          primary: "#f3f3f5",
          secondary: "#9b9ba6",
          muted: "#6a6a75",
        },
        secondary: "#9b9ba6",
        tertiary: "#121216",
      },
      boxShadow: {
        card: "0 4px 24px -1px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)",
        "card-hover":
          "0 28px 56px -18px rgba(0,0,0,0.55), 0 0 0 1px rgba(200,255,74,0.12)",
        glow: "0 0 48px -12px rgba(200, 255, 74, 0.35)",
      },
      screens: {
        xs: "480px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        marquee: "marquee 36s linear infinite",
        "marquee-rev": "marqueeRev 42s linear infinite",
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRev: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
