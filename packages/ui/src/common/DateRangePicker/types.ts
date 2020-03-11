import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { WithStyles } from '@material-ui/core'
import { StylesAPI } from './styles'

export interface Props extends WithStyles<keyof StylesAPI> {
  className?: string
  value: Array<MaterialUiPickersDate>
  onChange: (dates: { begin: MaterialUiPickersDate, end: MaterialUiPickersDate }) => void
  labelFunc?: any
  format?: string
  emptyLabel?: string
  autoOk?: boolean
  onOpen?: () => void
  onClose?: () => void
  open?: boolean,
  disablePast?: boolean
  label?: string
  placeholder?: string
  renderInput?: () => JSX.Element
  showLabel?: boolean
}
