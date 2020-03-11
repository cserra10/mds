import { PlaceInputProps, PlaceType } from '../PlaceInput'

export interface DialogPlaceInputProps extends PlaceInputProps {
  label?: string,
  renderInput?: (p: PlaceType) => JSX.Element
  showLabel?: boolean
  showStartAdornment?: boolean
}
