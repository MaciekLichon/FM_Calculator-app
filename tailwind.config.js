/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'league': ['League Spartan', 'sans-serif']
    },
    fontWeight: {
      bold: '700'
    },
    fontSize: {
      logoS: '2rem',
      navS: '0.75rem',
      displayS: '2.5rem',
      keyS: '2rem',
      keyAccentS: '1.25rem',
      displayL: '3.5rem',
      keyL: '2.5rem',
      keyAccentL: '1.75rem'
    },
    boxShadow: {
      keyShadow: '0px -4px 0px 0px inset',
    },
    colors: {
      regular: {
        bg: '#3A4663',
        bgDisplay: '#181F33',
        bgKeyboard: '#242D44',
        bgKey: '#EAE3DC',
        keyHover: '#FFFFFE',
        textDisplay: '#FFF',
        textKeys: '#434A59',
        keyReset: '#647198',
        keyResetHover: '#A2B2E1',
        keySubmit: '#D03F2F',
        keySubmitHover: '#F96B5B',
        keyShadow: '#B3A497',
        keyShadowReset: '#414E73',
        keyShadowSubmit: '#93261A'
      },
      light: {
        bg: '#E6E6E6',
        bgDisplay: '#EEE',
        bgKeyboard: '#D2CDCD',
        bgKey: '#E5E4E1',
        keyHover: '#FFF',
        textDisplay: '#36362C',
        textKeys: '#36362C',
        keyReset: '#378187',
        keyResetHover: '#62B5BC',
        keySubmit: '#C85402',
        keySubmitHover: '#FF8A38',
        keyShadow: '#A79E91',
        keyShadowReset: '#1B6066',
        keyShadowSubmit: '#873901'
      },
      dark: {
        bg: '#17062A',
        bgDisplay: '#1E0936',
        bgKeyboard: '#1E0936',
        bgKey: '#331C4D',
        keyHover: '#6C34AC',
        textDisplay: '#FFE53D',
        textKeys: '#FFE53D',
        keyReset: '#56077C',
        keyResetHover: '#8631AF',
        keySubmit: '#00DED0',
        keySubmitHover: '#93FFF8',
        keyShadow: '#881C9E',
        keyShadowReset: '#BE15F4',
        keyShadowSubmit: '#6CF9F1',
        textKeySubmit: '#1A2327'
      }
    },
    extend: {},
  },
  plugins: [],
}

