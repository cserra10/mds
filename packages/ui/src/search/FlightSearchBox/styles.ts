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
  paxes: CSSProperties
  paxesLabel: CSSProperties
  paxesControl: CSSProperties
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
      boxShadow: theme.shadows[0],
      color: theme.palette.text.primary
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

    paxes: {
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column'
    },

    submit: {
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(2),
      color: theme.palette.primary.contrastText,
      margin: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius
    }
  }) as StylesAPI

  // @ts-ignore
  const themeStyles = theme.styles ? theme.styles['search/FlightSearchBox'] : {}
  return combineStyles(styles, themeStyles)(theme)
}
