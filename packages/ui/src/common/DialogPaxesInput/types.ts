import { WithStyles } from '@material-ui/core'
import { StylesAPI } from './styles'
import { PaxesType } from '../Paxes'

export interface Props extends WithStyles<keyof StylesAPI> {
  className?: string
  label?: string
  showLabel?: boolean
  paxes: PaxesType,
  onChange: (data: any) => void
}
