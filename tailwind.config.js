/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{tsx,jsx}', './src/*.{tsx,jsx}'],
  theme: {
    fontSize: {
      xs: 'clamp(12px, 1vw, 16px)',
      sm: 'clamp(14px, 1.25vw, 18px)',
      md: 'clamp(16px, 1.56vw, 20px)',
      lg: 'clamp(18px, 1.82vw, 28px)'
    },
    screens: {
      xl: '1400px',
      ml: '900px',
      tb: '480px',
    },

    fontFamily: {
      poppins: ['Poppins'],
      lato: ['Lato'],
    },
    extend: {
      backgroundColor: {
        primary: '#fff',
        'discord-blue': 'var(--discord-blue)',
        testimony: '#ffefc5',
        error: 'var(--error-red)',
        'disabled-gray': 'var(--disabled-gray)',
        'input-bg': 'var(--input-bg)',
      },
      boxShadow: {
        'contact-form': '0 0 84px -30px #00000080',
      },
      borderRadius: {
        input: 'var(--input-border-radius)',
      },
      colors: {
        error: 'var(--error-red)',
        'disabled-gray': 'var(--disabled-gray)',
        'disabled-input': 'var(--disabled-input)',
        'border-blue': '#3897B5'
      },
      margin: {
        'navbar-x': 'var(--navbar-padding-x)',
        'navbar-y': 'var(--navbar-padding-y)',
        'navbar-x-sm': 'var(--navbar-padding-x-sm)',
        'navbar-y-sm': 'var(--navbar-padding-y-sm)',
      },
      padding: {
        'input-x': 'var(--input-padding-x)',
        'input-y': 'var(--input-padding-y)',
        'navbar-x': 'var(--navbar-padding-x)',
        'navbar-y': 'var(--navbar-padding-y)',
        'navbar-x-sm': 'var(--navbar-padding-x-sm)',
        'navbar-y-sm': 'var(--navbar-padding-y-sm)',
      },
      textShadow: { 
        'default': '0 0 0 0',
        'lg': '0 4px 4px var(--tw-shadow-color)',
      },
      spacing: {
        'input-x': 'var(--input-padding-x)',
        'input-y': 'var(--input-padding-y)',
      },
      dropShadow: {
        'xl': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      } ,
   
    },
  },
  plugins: [
    require('tailwindcss-typography')({
  
      ellipsis: true,         
      hyphens: true,         
      kerning: true,          
      textUnset: true,       
      componentPrefix: 'c-',  
    }),
  ],
};
