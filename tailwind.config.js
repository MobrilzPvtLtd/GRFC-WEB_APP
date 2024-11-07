/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all components and pages.
  ],
  theme: {
    extend: {
      colors : {
        'primary-btn': '#139CB0',
      }
    },
  },
  plugins: [],
}

