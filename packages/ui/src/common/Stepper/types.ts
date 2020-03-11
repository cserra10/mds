import { WithStyles } from '@material-ui/core'
import { StylesAPI } from './styles'

export interface Props extends WithStyles<keyof StylesAPI> {
  className?: string
  label?: string
  value?: number
  minValue?: number
  maxValue?: number
  onChange: (value: number) => void
}
