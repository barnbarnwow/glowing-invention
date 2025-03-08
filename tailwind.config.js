/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bebas Neue', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['EB Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      boxShadow: {
        'default': '4px 4px 0px 0px rgba(0,0,0,1)',
        'hover': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}; 