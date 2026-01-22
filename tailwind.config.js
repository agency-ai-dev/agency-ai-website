/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
