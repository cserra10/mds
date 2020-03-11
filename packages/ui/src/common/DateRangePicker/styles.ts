import { Theme, createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { combineStyles } from '../../utils'

export type StylesAPI = {
  dateRangePickerDialog: CSSProperties,
  day: CSSProperties
  hidden: CSSProperties
  current: CSSProperties
  focusedRange: CSSProperties
  dayDisabled: CSSProperties
  beginCap: CSSProperties
  endCap: CSSProperties
  focusedFirst: CSSProperties
  focusedLast: CSSProperties
  inputContainer: CSSProperties
  input: CSSProperties
  inputIcon: CSSProperties
  inputLabel: CSSProperties
}

export default (theme: Theme) => {
  const styles = createStyles({
    dateRangePickerDialog: {
      '& .MuiPickersCalendar-transitionContainer': {
        minHeight: 218,
        marginTop: 10
      }
    },
    day: {
      borderRadius: 0,
      width: 40,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: 0,
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      padding: 0,
      transition: 'none',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&::after': {
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.primary.main}`,
          boxSizing: 'border-box',
          transform: 'scale(1)'
        }
      },
      '& > .MuiIconButton-label': {
        zIndex: 3
      }
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600
    },
    focusedRange: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      width: 40,
      marginRight: 0,
      marginLeft: 0,
      borderRadius: 0
    },
    dayDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    },
    beginCap: {
      '&::after': {
        transform: 'scale(1)',
        backgroundColor: theme.palette.primary.main
      }
    },
    endCap: {
      '&::after': {
        transform: 'scale(1)',
        backgroundColor: theme.palette.primary.main
      }
    },
    focusedFirst: {
    },
    focusedLast: {
    },

    input: {
      border: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(0.5, 1),
      '& input::placeholder': {
        color: theme.palette.text.primary
      }
    },
    inputIcon: {
      marginRight: theme.spacing(1),
      color: theme.palette.text.disabled,
      opacity: 0.8
    },
    inputLabel: {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(1)
    }
  })

  // @ts-ignore
  return combineStyles(styles, theme.styles['common/DateRangePicker'])(theme)
}
