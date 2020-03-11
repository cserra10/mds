import { WithStyles } from '@material-ui/core/styles'
import { StylesAPI } from './styles'
import { PaxesProps, PaxesFormType, PaxesType } from '../Paxes/types'

export type RoomType = {
  id: string,
  paxes: PaxesType
}

export type RoomsFormType = {
  id?: string
  rooms?: RoomType[]
  submitted?: boolean
  error?: undefined | { message: string },
  submitCount?: number
}

export interface RoomsProps extends WithStyles<keyof StylesAPI> {
  id?: string
  className?: string
  title?: string
  minRooms?: number
  maxRooms?: number
  PaxesProps?: PaxesProps
  onChange?: (rooms: RoomType[]) => void
  onSubmit?: (form: PaxesFormType) => void
  submitLabel?: string
  autoSubmit?: boolean
  showSubmit?: boolean
  initialData? : PaxesType[]
}
