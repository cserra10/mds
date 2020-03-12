import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root: CSSProperties
  increaseButton: CSSProperties
  input: CSSProperties
  decreaseButton: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    root: {
      width: 150,
      display: 'flex',
      border: `1px solid ${theme.palette.text.disabled}`,
      boxSizing: 'border-box',
      justifyContent: 'center',
      textAlign: 'center',
      color: theme.palette.text.primary,
      '& > * ': {
        flexBasis: '100%'
      }
    },

    input: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRight: `1px solid ${theme.palette.text.disabled}`,
      borderLeft: `1px solid ${theme.palette.text.disabled}`
    }
  }) as StylesAPI


  // @ts-ignore
  const themeStyles = theme.styles?.['common/Stepper']
  return combineStyles(styles, themeStyles)(theme)
}
