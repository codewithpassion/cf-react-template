import type { Config } from "tailwindcss"

import typeography from '@tailwindcss/typography'
import tailwindcssAnimate from "tailwindcss-animate";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import theme from './src/lib/theme'

const config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: { extend: theme },
  plugins: [tailwindcssAnimate, typeography, addVariablesForColors],
} satisfies Config


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


export default config