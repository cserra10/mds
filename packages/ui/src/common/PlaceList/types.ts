import { WithStyles } from '@material-ui/core'
import { StylesAPI } from './styles'

export type PlaceType = null | Record<string, string>

export interface PlaceListProps extends WithStyles<keyof StylesAPI> {
  className?: string
  optionProps: Function
  places: PlaceType[]
  showHeader?: boolean
  showPlaceIcon?: boolean
  labelProperty?: string
  groupBy?: string
}
