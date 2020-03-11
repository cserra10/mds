import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  root: CSSProperties
  header: CSSProperties
  main: CSSProperties
  originDestination: CSSProperties
  toggleOriginDestination: CSSProperties
  origin: CSSProperties
  originLabel: CSSProperties
  originInput: CSSProperties
  destination: CSSProperties
  destinationLabel: CSSProperties
  destinationInput: CSSProperties
  dates: CSSProperties
  datesLabel: CSSProperties
  rooms: CSSProperties
  roomsLabel: CSSProperties
  roomsControl: CSSProperties
  submit: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    root: {
      position: 'relative',
      border: `1px solid ${theme.palette.divider}`,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },

    header: {
      boxShadow: theme.shadows[0]
    },

    main: {
      padding: theme.spacing(2)
    },

    originDestination: {
      display: 'flex',
      flexDirection: 'column'
    },

    origin: {
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    },

    toggleOriginDestination: {
      marginBottom: theme.spacing(2),
      alignSelf: 'center',
      display: 'none'
    },

    destination: {
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    },

    dates: {
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    },

    rooms: {
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    },

    submit: {
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(1),
      color: theme.palette.text.primary,
      margin: theme.spacing(2)
    }
  }) as StylesAPI

  // @ts-ignore
  return combineStyles(styles, theme.styles['search/PackageSearchBox'])(theme)
}
