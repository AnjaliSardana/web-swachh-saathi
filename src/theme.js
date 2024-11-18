import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f6f9',
      100: '#b3e4ec',
      200: '#80d2df',
      300: '#4dc0d2',
      400: '#1aaec5',
      500: '#179cb1',
      600: '#138a9d',
      700: '#0f7889',
      800: '#0b6675',
      900: '#075461',
    },
  },
  fonts: {
    heading: `'SF Pro Text', -apple-system, system-ui, sans-serif`,
    body: `'SF Pro Text', -apple-system, system-ui, sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
        fontWeight: '500',
        fontFamily: `'SF Pro Text', -apple-system, system-ui, sans-serif`,
      },
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: `'SF Pro Text', -apple-system, system-ui, sans-serif`,
      },
    },
  },
})

export default theme 