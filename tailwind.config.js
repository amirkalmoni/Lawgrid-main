/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px'
    },
    fontSize: {
      xs: ['14px', {lineHeight: '24px', letterSpacing: '0.03em' }],
      sm: ['16px', {lineHeight: '24px', letterSpacing: '0.03em' }],
      lg: ['18px', {lineHeight: '26px', letterSpacing: '0.03em' }],
      '2xl': ['24px', {lineHeight: '36px', letterSpacing: '-0.032em' }],
       '3xl': ['38px', {lineHeight: '42px', letterSpacing: '-0.032em' }],
      '4xl': ['48px', {lineHeight: '56px', letterSpacing: '-0.032em' }],
      '5xl': ['56px', {lineHeight: '64px', letterSpacing: '-0.032em' }],
      '6xl': ['80px', {lineHeight: '80px', letterSpacing: '-0.032em' }],
    },
    fontFamily: {
      Founders_Grotesk: 'Founders Grotesk, sans-serif',
      Poppins: 'Poppins, sans-serif',
    },
    extend: {
      colors: {
        lawgrid_blue: '#213559',
        cream: '#F7C774',
        white: "#ffffff",
      },
      borderRadius: {
        'lawgrid': "0px 0.6rem",
      },
      boxShadow: {
        "lawgrid": "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)",
        "google": "0 2px 6px 0 rgba(0,0,0,.12),inset 0 -1px 0 0 #dadce0"
      }
    }
  },
  plugins: [],
}
