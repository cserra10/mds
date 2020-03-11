import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { WithStyles } from '@material-ui/core'
import { PlaceType } from '../../common/PlaceInput'
import { PaxesType } from '../../common/Paxes'
import { StylesAPI } from './styles'

export type HotelSearchDataType = {
  destination?: undefined | PlaceType
  dates?: Array<MaterialUiPickersDate>
  paxes?: PaxesType
}

export type HotelFormType = {
  id?: string
  data?: HotelSearchDataType
  submitted?: boolean
  error?: undefined | { message: string },
  submitCount?: number
}

export interface Props extends WithStyles<keyof StylesAPI> {
  id?: string
  className?: string
  title?: string
  onChange?: (data: HotelSearchDataType) => void
  onSubmit?: (form: HotelFormType) => void
  fetchPlaces: (searchText: string) => Promise<any>
  initialData?: HotelSearchDataType
}
