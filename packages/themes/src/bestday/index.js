import styles from './styles'

export default {
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
