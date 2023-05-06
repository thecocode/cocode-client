/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,jsx}', './src/*.{tsx,jsx}'],
  theme: {
    fontSize: {
      base: 'clamp(16px, 1.563vw, 20px)',
    },
    screens : {
      xl : '1400px',
      ml : '900px',
      tb : '480px'
    },
    fontFamily : {
      'poppins' : ['Poppins'],
      'lato' : ['Lato']
    },
    extend: {
      backgroundColor: {
        primary: '#fff',
        'discord-blue': 'var(--discord-blue)',
        testimony: '#ffefc5',
      },
      fontSize: {
        navlink: 'clamp(14px, 1.25vw, 18px)',
      },
      margin: {
        'navbar-x': 'var(--navbar-x)',
        'navbar-y': 'var(--navbar-y)',
      },
      padding: {
        'navbar-x': 'var(--navbar-x)',
        'navbar-y': 'var(--navbar-y)',
      },
    },
  },
  plugins: [],
};
