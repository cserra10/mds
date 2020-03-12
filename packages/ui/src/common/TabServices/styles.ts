import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root: CSSProperties
  tab: CSSProperties
  selectedTab: CSSProperties
  tabIcon: CSSProperties
  tabIconPackage: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    tab: {
      textTransform: 'unset'
    },

    selectedTab: {
      color: `${theme.palette.secondary.main}!important`
    },

    tabIconPackage: {
      display: 'flex'
    }
  }) as StylesAPI


  // @ts-ignore
  const themeStyles = theme.styles ? theme.styles['common/TabServices'] : {}
  return combineStyles(styles, themeStyles)(theme)
}
