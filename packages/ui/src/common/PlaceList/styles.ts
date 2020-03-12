import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root?: CSSProperties
  placeGroup?: CSSProperties
  placeHeader?: CSSProperties
  place?: CSSProperties
  placeLabel?: CSSProperties
  placeIcon?: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    placeHeader: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0.5),
      '& *': {
        margin: theme.spacing(0, 0.5)
      }
    },

    place: {
      padding: theme.spacing(0.7),
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.text.primary,
      borderBottom: `1px solid ${theme.palette.divider}`
    }
  }) as StylesAPI

  // @ts-ignore
  const themeStyles = theme.styles?.['common/PlaceList']
  return combineStyles(styles, themeStyles)(theme)
}
