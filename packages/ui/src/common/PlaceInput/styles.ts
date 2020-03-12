import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root?: CSSProperties
  label?: CSSProperties
  input?: CSSProperties
  close?: CSSProperties
  inputStartAdornment?: CSSProperties
  inputEndAdornment?: CSSProperties
  placeList?: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },

    input: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(0.5, 1),
      '& input::placeholder': {
        color: theme.palette.text.primary
      }
    },

    inputStartAdornment: {
      marginRight: 10
    }
  }) as StylesAPI

  // @ts-ignore
  const themeStyles = theme.styles ? theme.styles['common/PlaceInput'] : {}
  return combineStyles(styles, themeStyles)(theme)
}
