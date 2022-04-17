module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#1c1e21',
        blue: '#764abc',
        yellow: '#FCA311',
        gray: '#E5E5E5',
        white: '#FFFFFF',
        bgBlack: '#18191a',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
