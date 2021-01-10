const palette = {
  red: 'red',
  lightGray: '#eee',
  gray: '#e0e0e0',
  gray500: '#656565',
  gray700: '#4C4C4C',
  gray800: '#383838',
  gray900: '#262626',
  white: 'white',
  black: 'black',
  tomato: 'tomato',
  green: '#278F72',
  darkGreen: '#134336',
  lightOrange: '#ffbf59',
  transparentBlack: '#00000040'
}

const theme = {
  isDark: false,
  colors: {
    mainBackground: palette.lightGray,
    headerBackground: palette.white,
    contentBackground: palette.lightGray,
    cardBackground: palette.white,
    transparentBackground: palette.transparentBlack,

    shadow: palette.gray,
    border: palette.lightGray,
    primaryButton: palette.tomato,
    activeTint: palette.tomato,

    text: palette.black,
    inverseText: palette.white,
    errorText: palette.red,
  },
  spacing: {
    xs: 10,
    s: 15,
    m: 20,
    l: 25,
    xl: 30,
  },
  textVariants: {
    header: {
      fontSize: 18,
    },
    subheader: {
      fontSize: 16
    },
    title: {
      fontSize: 18
    },
    subtitle: {
      fontSize: 14
    }
  }
}

const greenDarkTheme = {
  ...theme,
  isDark: true,
  colors: {
    ...theme.colors,
    mainBackground: palette.gray900,
    headerBackground: palette.darkGreen,
    text: palette.lightGray,
    inverseText: palette.black,
    primaryButton: palette.lightOrange,
    cardBackground: palette.green,
    contentBackground: palette.gray,
    border: palette.darkGreen,
    activeTint: palette.lightOrange,
  }
}

const darkTheme = {
  ...theme,
  isDark: true,
  colors: {
    ...theme.colors,
    mainBackground: palette.gray500,
    headerBackground: palette.gray900,
    text: palette.lightGray,
    inverseText: palette.black,
    primaryButton: palette.lightOrange,
    cardBackground: palette.gray800,
    contentBackground: palette.gray,
    border: palette.gray900,
    activeTint: palette.lightOrange,
  }
}

export default darkTheme;