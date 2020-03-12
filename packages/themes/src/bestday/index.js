import styles from './styles'

export default {
  palette: {
    primary: {
      main: '#0171C9'
    },
    secondary: {
      main: '#FF9F54'
    }
  },

  overrides: {
    MuiInputBase: {
      input: {
        '&::placeholder': {
          opacity: 0.8,
          fontStyle: 'italic'
        }
      }
    }
  },

  styles
}
