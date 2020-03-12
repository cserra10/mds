import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { WithStyles } from '@material-ui/core'
import { PlaceType } from '../../common/PlaceInput'
import { PaxesType } from '../../common/Paxes'
import { StylesAPI } from './styles'

export type FlightDataType = {
  origin?: undefined | PlaceType
  destination?: undefined | PlaceType
  dates?: Array<MaterialUiPickersDate>
  paxes?: PaxesType
}

export type FlightFormType = {
  id?: string
  data?: FlightDataType
  submitted?: boolean
  error?: undefined | { message: string },
  submitCount?: number
}

export interface Props extends WithStyles<keyof StylesAPI> {
  id?: string
  className?: string
  title?: string
  onChange?: (data: FlightDataType) => void
  onSubmit?: (form: FlightFormType) => void
  fetchPlaces: (searchText: string) => Promise<any>
  initialData?: FlightDataType
}
