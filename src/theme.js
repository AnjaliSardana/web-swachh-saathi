import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#F6F6F6',
      100: '#EEEEEE',
      200: '#E2E2E2',
      300: '#CBCBCB',
      400: '#AFAFAF',
      500: '#6B6B6B',
      600: '#545454',
      700: '#333333',
      800: '#1C1C1C',
      900: '#000000',
    },
  },
  fonts: {
    heading: `'UberMove', -apple-system, system-ui, sans-serif`,
    body: `'UberMoveText', -apple-system, system-ui, sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
        fontWeight: '500',
        fontFamily: `'UberMoveText', -apple-system, system-ui, sans-serif`,
      },
      variants: {
        solid: {
          bg: 'black',
          color: 'white',
          _hover: {
            bg: 'gray.800',
          },
        },
        outline: {
          borderColor: 'gray.300',
          color: 'black',
          _hover: {
            bg: 'gray.50',
          },
        },
      },
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: 'gray.300',
            _focus: {
              borderColor: 'black',
              boxShadow: 'none',
            },
            _hover: {
              borderColor: 'gray.400',
            },
          },
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            borderColor: 'gray.300',
            _focus: {
              borderColor: 'black',
              boxShadow: 'none',
            },
            _hover: {
              borderColor: 'gray.400',
            },
          },
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: `'UberMoveText', -apple-system, system-ui, sans-serif`,
      },
    },
  },
})

export default theme 