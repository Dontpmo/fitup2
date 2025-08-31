/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./fitup/src/app/**/*.{jsx,tsx,ts}"

  ],
  theme: {
    extend: {
        fontFamily: {
            archivo: ["Archivo Black", "sans-serif"]
        },
        colors : {
          limecustom: "#b4d518"
        },
        keyframes: {
          slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        },
        animation: {
        slideInUp: 'slideInUp 0.5s ease-out forwards',
    },
  },
  plugins: [],
}}