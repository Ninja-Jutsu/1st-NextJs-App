export const COLORS = {
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '178, 90%, 19%',
  secondary: '163, 78%, 39%',
  alert: '25, 80%, 55%',
  error: '11, 85%, 52%',
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
}

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
}

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
}
