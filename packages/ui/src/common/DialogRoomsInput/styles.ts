import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root: CSSProperties
  label: CSSProperties
  control: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    label: {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(1)
    },

    control: {
      minWidth: 245,
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1.2, 1, 0.8, 1),
      display: 'flex',
      color: theme.palette.text.disabled,
      justifyContent: 'space-evenly',
      '& > div': {
        display: 'flex',
        alignItems: 'center'
      }
    }
  }) as StylesAPI

  // @ts-ignore
  const themeStyles = theme.styles ? theme.styles['common/DialogRoomsInput'] : {}
  return combineStyles(styles, themeStyles)(theme)
}
