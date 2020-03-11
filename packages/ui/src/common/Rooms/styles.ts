import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  /**
   * Styles applied to the root element
   */
  root?: CSSProperties
  title?: CSSProperties
  room?: CSSProperties
  roomTitle?: CSSProperties
  paxes?: CSSProperties
  deleteRoomButton?: CSSProperties
  addRoomButton?: CSSProperties
  submitButton?: CSSProperties
}

export default (theme: Theme) => {
  const defaultStyles = createStyles({
    root: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column'
    },

    title: {
      paddingBottom: theme.spacing(0.1)
    },

    room: {
      display: 'flex',
      flexDirection: 'column',
      border: `1px solid ${theme.palette.divider}`,
      position: 'relative',
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2)
    },

    paxes: {
      border: 'none',
      padding: 0
    },

    deleteRoomButton: {
      alignSelf: 'flex-end'
    },

    addRoomButton: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(2),
      width: 'fit-content',
      alignSelf: 'flex-end'
    },

    submitButton: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(2),
      border: `1px solid ${theme.palette.divider}`
    }

  }) as StylesAPI

  // @ts-ignore
  return combineStyles(defaultStyles, theme.styles['common/Rooms'])(theme)
}
