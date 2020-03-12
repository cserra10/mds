import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root?: CSSProperties
  close?: CSSProperties
  label?: CSSProperties
  input?: CSSProperties
  inputStartAdornment?: CSSProperties
  originInputStartAdornment?: CSSProperties
}

export default (theme: Theme) => {
  const styles = <StylesAPI> createStyles({
    close: {
      alignSelf: 'flex-end',
      padding: theme.spacing(1)
    },

    label: {
      marginBottom: theme.spacing(1),
      color: theme.palette.text.primary
    },

    input: {
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(0.5, 1),
      '& input::placeholder': {
        color: theme.palette.text.primary
      }
    },
    inputStartAdornment: {
      marginRight: theme.spacing(1),
      color: theme.palette.text.disabled,
      opacity: 0.8
    }
  })

  // @ts-ignore
  const themeStyles = theme.styles ? theme.styles['common/DialogPlaceList'] : {}
  return combineStyles(styles, themeStyles)(theme)
}
