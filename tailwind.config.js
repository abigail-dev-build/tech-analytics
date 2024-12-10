
/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: [
    // './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        dark: '#313131',
        white: '#FFFFFF',
        blue: '#1E7AD0',
        gray: '#E2E2E3',
        grey: '#525252',
        lightgray: '#A0A3A6',
        lightblue:'#B9D6F0',
        green: '#0B9266',
        red: '#E93338',
        offwhite: '#F4FAFE',
        sky: '#E9F2FA',

      },
      width: {
        37: '148px',
        45: '179px',
        51: '204px',
        55: '220px',
        80: '310px',
        85: '338px',
        95: '380px',
        99: '534px',
        103: '559px',
        105: '639px',
        115: '1015px',
        
      },
      height: {
        10.5: '42px',
        11.5: '46px',
        21: '84px',
        46: '184px',
        81:'325px',
        92: '622px',
       128:'1028px',
    
      },
    },
  },
  
  // variants: {
  //   extend: {
  //     backgroundClip: ['text'],
  //   },
  // },

  plugins: [],
}