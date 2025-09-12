/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AD5628",
        accent: "#FCF6EC",
        background: "#FCF6EC",
        text: "#4A4A4A",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        horizon: ['Horizon', 'sans-serif'],
      },
    },
  },
};