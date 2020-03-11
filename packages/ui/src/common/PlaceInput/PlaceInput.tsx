import React, { memo } from 'react'
import clsx from 'clsx'
import CancelIcon from '@material-ui/icons/Cancel'
import useAutocomplete from '@material-ui/lab/useAutocomplete'
import SearchIcon from '@material-ui/icons/Search'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputBase from '@material-ui/core/InputBase'
import { withStyles } from '@material-ui/core/styles'
import { debounce } from '../../utils'
import PlaceList from '../PlaceList/PlaceList'
import { PlaceInputProps, PlaceType } from './types'
import styles from './styles'

const PlaceInput: React.FC<PlaceInputProps> = (
  {
    className: classNameProp,
    classes,
    fetchPlaces,
    placeholder = 'Search place',
    onPlaceChange,
    showHeader = true,
    autoFocus = false,
    labelProperty = 'Label',
    groupBy = 'Type',
    showClear = false,
    showPlaceIcon = false
  }: PlaceInputProps
) => {
  const [places, setPlaces] = React.useState<PlaceType[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)

  const handleInputChange = async (_: React.ChangeEvent<{}>, searchText: string) => {
    if (!searchText || searchText.length < 3) return false

    try {
      setLoading(true)
      const { results } = await fetchPlaces(searchText)
      setPlaces(results)
    } catch (err) {
      setPlaces([])
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (_: React.ChangeEvent<{}>, place: PlaceType) => {
    onPlaceChange(place)
  }

  const {
    getRootProps,
    getInputProps,
    getOptionProps,
    groupedOptions,
    getClearProps
  } = useAutocomplete({
    clearOnEscape: true,
    options: places as Record<string, string>[],
    getOptionLabel: p => p[labelProperty],
    onChange: handleChange,
    onInputChange: debounce(handleInputChange, 200)
  })

  const className = clsx(classNameProp, classes.root)

  return (
    <div
      className={className}
      {...getRootProps()}
    >
      <InputBase
        {...getInputProps()}
        className={classes.input}
        autoFocus={autoFocus}
        placeholder={placeholder}
        startAdornment={
          <>{showPlaceIcon && (<SearchIcon className={classes.inputStartAdornment} />)}</>
        }
        endAdornment={(
          <>
            {loading ? (
              <div>
                <CircularProgress
                  className={classes.inputEndAdornment}
                  disableShrink
                  size={20}
                />
              </div>
            ) : null}
            {showClear && (<CancelIcon color="disabled" {...getClearProps()} />)}
          </>
        )}
      />
      {groupedOptions.length > 0 && (
        <PlaceList
          className={classes.placeList}
          optionProps={getOptionProps}
          showHeader={showHeader}
          places={groupedOptions}
          labelProperty={labelProperty}
          groupBy={groupBy}
        />
      )}
    </div>
  )
}

export default memo(withStyles(styles)(PlaceInput))
