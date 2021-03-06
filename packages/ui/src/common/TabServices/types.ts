import { WithStyles } from '@material-ui/core'
import { StylesAPI } from './styles'

export interface Props extends WithStyles<keyof StylesAPI> {
  className?: string
  value?: string
  onChange: (value: string) => void
}
