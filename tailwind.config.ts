import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B0C0E",
        surface: {
          DEFAULT: "#121418",
          hover: "#1A1D24",
        },
        border: {
          DEFAULT: "#2A2E38",
          muted: "#1E222A",
        },
        ink: {
          DEFAULT: "#EEEFF1",
          muted: "#8B909A",
          faint: "#5C616B",
        },
        accent: {
          DEFAULT: "#E86F2A",
          soft: "#E86F2A33",
          strong: "#C85A1C",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25rem", letterSpacing: "0.02em" }],
        sm: ["0.875rem", { lineHeight: "1.375rem", letterSpacing: "0.01em" }],
        base: ["1rem", { lineHeight: "1.625rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
        "2xl": ["2rem", { lineHeight: "2.4rem", letterSpacing: "-0.02em" }],
        "3xl": ["3rem", { lineHeight: "3.4rem", letterSpacing: "-0.025em" }],
        "4xl": ["4rem", { lineHeight: "4.4rem", letterSpacing: "-0.03em" }],
        "5xl": ["6rem", { lineHeight: "6.2rem", letterSpacing: "-0.035em" }],
      },
      spacing: {
        section: "clamp(6rem, 12vw, 10rem)",
        "section-sm": "clamp(4rem, 8vw, 6rem)",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
      },
      boxShadow: {
        elev1: "0 1px 2px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.25)",
        elev2: "0 2px 8px rgba(0,0,0,0.4), 0 24px 48px rgba(0,0,0,0.35)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.45" },
          "70%": { transform: "scale(2.4)", opacity: "0" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "pulse-ring": "pulse-ring 2.2s ease-out infinite",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
