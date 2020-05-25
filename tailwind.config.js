module.exports = {
  purge: false,
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
    },
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      },
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    }
  },
  variants: {},
  plugins: [],
};
