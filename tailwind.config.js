const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  important: true,
  theme: {
    inset: {
      20: '20px',
      '30px': '30px',
      ...defaultTheme.inset
    },
    fontSize: {
      '10px': '10px',
      tiny: '0.625rem',
      ...defaultTheme.fontSize
    },
    colors: {
      defaultGray: '#f5f6f7',
      accentBlue: '#4263eb',
      boldBlack: '#333333',
      formGray: '#888888',
      formBackground: '#f7f7f7',
      menuGray: '#f6f6f6',
      textBlack: '#171f29',
      textGray: '#666666',
      textGray1: '#444444',
      textGray2: '#a1a2a3',
      textGreen: '#40c057',
      historyGreen: '#12B886',
      historyBlue: '#2a74e4',
      textGreen2: '#96D839',
      errorMessage: '#f03e3e',
      formBorderGray: '#cecece',
      borderColor: '#eaeaea',
      textOrange: '#fd4914',
      borderTransparency: 'rgba(255, 255, 255, 0.2)',
      formGray1: 'rgba(234, 234, 234, 0.16)',
      formActiveBackground: 'rgba(66, 99, 235, 0.06)',
      formActiveGray: '#eaeaea',
      resultGray1: '#FBFBFB',
      resultGray2: '#F5F6F7',

      ...defaultTheme.colors
    },
    fontFamily: {
      SpoqaHanSans: ['SpoqaHanSans']
    },
    zIndex: {
      '-10': '-10',
      888: 888,
      999: 999,
      ...defaultTheme.zIndex
    },
    minHeight: {
      '1/2': '50%',
      ...defaultTheme.minHeight
    },
    extend: {
      spacing: {
        7: '1.75rem'
      },
      width: {
        '12px': '12px',
        1280: '1280px',
        36: '36px',
        416: '416px',
        160: '160px',
        104: '104px',
        75: '18.75rem',
        18: '4.5rem',
        '18px': '18px',
        '32%': '32%',
        '36%': '36%'
      },
      height: {
        '12px': '12px',
        720: '720px',
        36: '36px',
        85: '85px',
        18: '4.5rem',
        '18px': '18px',
        26: '6.5rem',
        '2xScreen': '200vh',
        360: '360px',
        '180px': '180px'
      },
      maxHeight: {
        80: '80%',
        100: '100%'
      },
      maxWidth: {
        '1/3': '33%',
        160: '160px',
        104: '104px'
      },
      minWidth: {
        '1/3': '33%',
        160: '160px',
        104: '104px'
      },
      margin: {
        '2px': '2px',
        '5px': '5px',
        '6px': '6px',
        15: '3.75rem',
        '10px': '10px',
        '20px': '20px',
        '13px': '13px',
        '30px': '30px',
        '34px': '34px',
        '40px': '40px'
      },
      padding: {
        '5px': '5px',
        '4px': '4px',
        '6px': '6px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '14px': '14px',
        '30px': '30px',
        '40px': '40px'
      },
      borderWidth: {
        10: '10px',
        ...defaultTheme.borderWidth
      },
      borderRadius: {
        '16px': '16px'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['first', 'last'],
    borderWidth: ['first', 'last'],
    borderStyle: ['first', 'last']
  },
  plugins: []
}
