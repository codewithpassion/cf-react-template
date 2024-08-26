/** @type {import('tailwindcss').Config} */

import typeography from '@tailwindcss/typography'
import tailwindcssAnimate from "tailwindcss-animate";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimate, typeography, addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const pal = theme("colors")
  const allColors = flattenColorPalette(pal);
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
