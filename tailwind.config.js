const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'console-black': '#0c0c0c',
        // Primary
        'console-green': '#04E39F',
        'console-cyan': '#43C9CA',
        'console-lavender': '#C8BAFF',
        // Secondary
        'console-light-cyan': '#00F0D4',
        'console-dar-cyan': '#25A898',
        'console-pink': '#FB91F0',
        'console-blue-indigo': '#173D9F',

      },
      fontFamily: {
        headlines: ['Faktum', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        captions: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      screens: {
        'tall': { 'raw': '(max-height: 640px)' },
        'taller': { 'raw': '(max-width: 768px), (max-height: 680px)' },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
