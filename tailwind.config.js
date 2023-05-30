module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'system-ui',
      secondary: 'system-ui',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      boxShadow: {
        box1: 'rgb(38, 57, 77) 0px 20px 30px -10px;',
      },
      gradientColorStops: {
        'custom-gradient': 'linear-gradient(58.2deg, rgba(140,91,212,0.73) -3%, rgba(171,53,163,0.45) 49.3%, rgba(255,204,112,0.37) 97.7%)',
      },
      colors: {
        yellow:'#FFDC8A',
        primary: '#212353',
        secondary: '#4B5D68',
        dark: '#191e28',
        white:'#ffffff',
        accent: {
          primary: '#9C69E2',
          primary_hover: '#9059DB',
          secondary: '#F063B8',
          secondary_hover: '#E350A9',
          tertiary: '#68C9BA',
        },
      },
      backgroundImage: {
        hero: "url('../src/assets/img/mobile-map-rb.png')",
      },
      dropShadow: {
        primary: ' 0px 5px 5px rgba(75, 93, 104, 0.1)',
      },
    },
  },
  plugins: [
    require('tailwindcss')(),
    require('autoprefixer')(),
  ],
};
