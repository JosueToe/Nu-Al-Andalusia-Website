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
        // Primary Colors - Modern & Vibrant
        "deep-teal": "#0D9488", // Modern teal - brighter and more vibrant
        "rich-gold": "#F59E0B", // Modern amber/gold - more vibrant
        "navy-blue": "#1E293B", // Modern slate - softer than pure navy
        // Secondary Colors
        cream: "#F8FAFC", // Modern off-white - cooler tone
        white: "#FFFFFF",
        "warm-gray": "#475569", // Modern slate gray - better contrast
        // Accent Colors (Modern Heritage Theme)
        terracotta: "#EF4444", // Modern red - more vibrant
        "desert-sand": "#F97316", // Modern orange - vibrant accent
        "emerald-green": "#10B981", // Modern emerald - brighter
        // Additional Modern Colors
        "slate-light": "#F1F5F9",
        "slate-dark": "#0F172A",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "h1": ["56px", { lineHeight: "1.2", fontWeight: "700" }],
        "h2": ["42px", { lineHeight: "1.3", fontWeight: "700" }],
        "h3": ["32px", { lineHeight: "1.4", fontWeight: "600" }],
        "h4": ["24px", { lineHeight: "1.5", fontWeight: "600" }],
        "body": ["18px", { lineHeight: "1.7" }],
        "small": ["14px", { lineHeight: "1.6" }],
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        section: "120px",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      transitionDuration: {
        default: "300ms",
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1024px",
        "large-desktop": "1441px",
      },
    },
  },
  plugins: [],
};
export default config;

