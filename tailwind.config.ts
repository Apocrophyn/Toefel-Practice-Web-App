import type { Config } from "tailwindcss";

/**
 * CONCOURSE — design tokens for the split-flap departure-board world.
 *
 * Everything below describes a physical object: matte black flaps in a
 * brushed-steel frame, lit from above, with amber row lamps. Nothing glows,
 * nothing is a decorative gradient, nothing is purple.
 *
 * The palette is deliberately narrow and the whole Tailwind hue space is
 * remapped onto it, so no file in the tree can reach a colour the world does
 * not own:
 *
 *   steel     neutrals — every ground, rule, rim and secondary label
 *   ivory     the warm paint on a flap face — primary text
 *   amber     THE accent. Live rows, running clocks, the primary action.
 *   platform  state only: correct, on-track, advanced
 *   signal    state only: incorrect, cancelled, out of time
 *
 * Shade convention across amber / platform / signal:
 *   300–400  bright — text and lamps, ≥4.5:1 on the concourse ground
 *   500–600  fills  — dark enough that ivory sits on them at ≥4.5:1
 *                     (amber is the exception: amber fills take dark text)
 */

const steel = {
  50: "#F4F2EE",
  100: "#E4E2DD",
  200: "#C4C7CA",
  300: "#A3AAB0",
  400: "#8B939B",
  500: "#79828A",
  600: "#4C545B",
  700: "#3A4046",
  800: "#23282C",
  900: "#17191C",
  950: "#0A0B0C",
};

const amber = {
  50: "#FDF3E2",
  100: "#FAE3BE",
  200: "#F6CE8F",
  300: "#F4BC63",
  400: "#F2A93B",
  500: "#DE9227",
  600: "#B8791F",
  700: "#8E5C17",
  800: "#5C3C10",
  900: "#3A260A",
  950: "#201505",
};

const platform = {
  50: "#E8F5EE",
  100: "#CDEBDB",
  200: "#A8DCC0",
  300: "#7DC7A0",
  400: "#4EA97B",
  500: "#2E6F50",
  600: "#24573F",
  700: "#1F4733",
  800: "#16342A",
  900: "#0F241C",
  950: "#081410",
};

const signal = {
  50: "#FBEDE9",
  100: "#F6D5CE",
  200: "#EFB0A5",
  300: "#E38677",
  400: "#D45B49",
  500: "#A33B2C",
  600: "#852F23",
  700: "#6A251C",
  800: "#4B211A",
  900: "#2E1310",
  950: "#1A0A08",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ---- The world's own names ---- */
        concourse: {
          DEFAULT: "#0A0B0C",
          deep: "#060708",
          raised: "#101214",
        },
        flap: {
          seam: "#08090A",
          face: "#17191C",
          lit: "#1E2125",
          sheet: "#1A1D20",
        },
        steel,
        ivory: {
          DEFAULT: "#EDEAE4",
          dim: "#C4C7CA",
          faint: "#9AA0A5",
        },
        amber,
        platform,
        signal,

        /* ---- Every Tailwind hue folded onto the world ----
         * Legacy markup keeps compiling; it just cannot escape the palette.
         * Brand-ish hues collapse to the single amber accent, "good" hues to
         * platform green, "bad" hues to signal red, greys to steel.
         */
        white: "#EDEAE4",
        black: "#060708",

        slate: steel,
        gray: steel,
        zinc: steel,
        neutral: steel,
        stone: steel,

        cyan: amber,
        sky: amber,
        blue: amber,
        indigo: amber,
        violet: amber,
        purple: amber,
        fuchsia: amber,
        pink: amber,
        orange: amber,
        yellow: amber,
        primary: amber,
        accent: amber,

        emerald: platform,
        green: platform,
        teal: platform,
        lime: platform,
        secondary: platform,

        red: signal,
        rose: signal,
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        /* The board voice: condensed caps on every flap. */
        board: ["var(--font-archivo-narrow)", "var(--font-archivo)", "sans-serif"],
        /* Legacy alias — existing `font-mono` clocks become board digits. */
        mono: ["var(--font-archivo-narrow)", "var(--font-archivo)", "sans-serif"],
      },
      letterSpacing: {
        board: "0.14em",
        rail: "0.24em",
      },
      borderRadius: {
        flap: "2px",
        panel: "3px",
      },
      boxShadow: {
        flap: "inset 0 1px 0 rgba(255,255,255,0.045), 0 2px 6px rgba(0,0,0,0.55)",
        "flap-lit":
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 3px 10px rgba(0,0,0,0.6)",
        panel:
          "inset 0 1px 0 rgba(255,255,255,0.035), 0 18px 44px -20px rgba(0,0,0,0.9)",
        lamp: "0 0 0 1px rgba(242,169,59,0.35), 0 2px 10px -2px rgba(242,169,59,0.45)",
        plate:
          "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -6px 12px rgba(0,0,0,0.55), 0 4px 12px -4px rgba(0,0,0,0.8)",
      },
      animation: {
        "flap-in": "flapIn 260ms cubic-bezier(0.2, 0.9, 0.25, 1) both",
        "lamp-pulse": "lampPulse 2.6s steps(1, end) infinite",
        "rail-in": "railIn 320ms cubic-bezier(0.16, 1, 0.3, 1) both",
        /* Legacy names kept so old markup keeps animating, retuned mechanical. */
        "fade-in": "railIn 320ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "slide-up": "railIn 320ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "scale-in": "railIn 240ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-slow": "lampPulse 2.6s steps(1, end) infinite",
      },
      keyframes: {
        flapIn: {
          "0%": { transform: "rotateX(-92deg)", opacity: "0.35" },
          "60%": { transform: "rotateX(8deg)", opacity: "1" },
          "100%": { transform: "rotateX(0deg)", opacity: "1" },
        },
        lampPulse: {
          "0%, 62%": { opacity: "1" },
          "63%, 100%": { opacity: "0.4" },
        },
        railIn: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
