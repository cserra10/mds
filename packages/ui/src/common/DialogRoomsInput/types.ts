import { WithStyles } from '@material-ui/core'
import { StylesAPI } from './styles'
import { PaxesType } from '../Paxes'

export interface Props extends WithStyles<keyof StylesAPI> {
  className?: string
  label?: string
  showLabel?: boolean
  rooms: PaxesType[],
  onChange: (data: any) => void
}
