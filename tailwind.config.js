/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 1s infinite ', 
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-1%)' },
          '50%':{transform:'translateX(5%)'},
          '100%': { transform: 'translateX(-1%)' },
        },
      },
    },
  },
  plugins: [],
}