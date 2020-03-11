import { WithStyles } from '@material-ui/core'
import { StylesAPI } from './styles'

export type PlaceType = null | Record<string, string>

export interface PlaceInputProps extends WithStyles<keyof StylesAPI> {
  /**
   * className applied to the root element
   */
  className?: string
  language?: string
  itemTypes?: string
  itemTypesOrder?: string
  filters?: string
  affiliate?: string

  /**
   * Promise executed when input text changes.
   * @param searchText
   */
  fetchPlaces: (searchText: string) => Promise<any>

  /**
   * input placeholder
   */
  placeholder?: string

  /**
   * Callback execute when the place value changes
   */
  onPlaceChange: (p: PlaceType | null) => void

  /**
   * Initial place to render as input value
   */
  value?: PlaceType | null

  /**
   * If place list should render a header indicating place type
   */
  showHeader?: boolean

  /**
   * If place contains an icons
   */
  showPlaceIcon?: boolean

  /**
   * If the clear icon should be shown
   */
  showClear?: boolean

  /**
   * If the input should be disabled
   */
  disabled?: boolean

  /**
   * If the place item should have a bottom divider
   */
  divider?: boolean

  /**
   * If the input should focus automatically at startup
   */
  autoFocus?: boolean


  /**
   * Property used as label.
   */
  labelProperty?: string

  /**
   * Property used to group places in a Map object
   */

  groupBy?: string

  endAdornment?: JSX.Element
}
