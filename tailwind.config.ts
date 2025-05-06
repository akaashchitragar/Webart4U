import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        dark: "var(--rich-black)",
        light: "var(--off-white)",
        "soft-gray": "var(--soft-gray)",
        "neon-green": "var(--neon-green)",
        success: "var(--success-green)",
        warning: "var(--warning-yellow)",
        "orange-red": "var(--orange-red)",
        "deep-purple": "var(--deep-purple)",
        "electric-blue": "var(--electric-blue)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        headings: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
        accent: ["var(--font-playfair)", "serif"],
        ui: ["var(--font-dm-sans)", "sans-serif"],
        code: ["var(--font-fira-code)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { 
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleIn: {
          from: { 
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: { 
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.05)" },
        },
        "pulse-slow-reverse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1.05)" },
          "50%": { opacity: "0.4", transform: "scale(1)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        "pulse-slow-reverse": "pulse-slow-reverse 9s ease-in-out infinite",
        "float-slow": "float-slow 15s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config; 