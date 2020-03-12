import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties

  title?: CSSProperties

  /**
   * Styles applied to the adults container
   */
  adults?: CSSProperties

  /**
   * Styles applied to the adults label
   */
  adultsLabel?: CSSProperties

  /**
   * Styles applied to the adults stepper control
   */
  adultsStepper?: CSSProperties

  /**
   * Styles applied to the children container
   */
  children?: CSSProperties

  /**
   * Styles applied to the children label
   */
  childrenLabel?: CSSProperties

  /**
   * Styles applied to the children stepper control
   */
  childrenStepper?: CSSProperties

  /**
   * Styles applied to the childrenAge´s container
   */
  childrenAge?: CSSProperties

  /**
   * Styles applied to the children age select control
   */
  ageSelect?: CSSProperties

  inputControl?: CSSProperties
  submitButton?: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    root: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        padding: theme.spacing(2, 0),
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
      }
    },

    title: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: 0
    },

    inputControl: {
      width: 150
    },

    ageSelect: {
      textAlign: 'center',
      border: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: 0,
      '& select': {
        padding: theme.spacing(1)
      },
      '&::before': {
        border: 'none'
      }
    },

    submitButton: {
      padding: theme.spacing(1),
      margin: theme.spacing(2, 0),
      border: `1px solid ${theme.palette.divider}`,
      justifyContent: 'center'
    }
  }) as StylesAPI

  // @ts-ignore
  const themeStyles = theme.styles?.['common/Paxes']
  return combineStyles(styles, themeStyles)(theme)
}
