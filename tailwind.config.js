/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(-55%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

