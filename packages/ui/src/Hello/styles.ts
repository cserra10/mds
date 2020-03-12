import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../utils'

export type StylesAPI = {
  root: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    root: {

    }
  }) as StylesAPI


  // @ts-ignore
  const themeStyles = theme.styles ? theme.styles['common/Hello'] : {}
  return combineStyles(styles, themeStyles)(theme)
}
