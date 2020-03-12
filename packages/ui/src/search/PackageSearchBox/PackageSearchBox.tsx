import React, { memo, useEffect, useState } from 'react'
import clsx from 'clsx'
import shortid from 'shortid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ButtonBase from '@material-ui/core/ButtonBase'
import SwapHoriz from '@material-ui/icons/SwapHoriz'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import DateRangePicker from '../../common/DateRangePicker'
import DialogPlaceInput from '../../common/DialogPlaceInput'
import DialogRoomsInput from '../../common/DialogRoomsInput'
import { Props, PackageFormType } from './types'
import styles from './styles'

const PackageSearchBox: React.FunctionComponent<Props> = (
  {
    id = shortid.generate(),
    className: classNameProp,
    classes,
    onChange,
    onSubmit,
    fetchPlaces,
    title = 'Search Packages',
    initialData = {
      origin: undefined,
      destination: undefined,
      dates: [],
      rooms: [{ adults: 1, children: 0, childrenAges: [] }]
    }
  }: Props
) => {
  const [form, setForm] = useState<PackageFormType>({
    id,
    data: { ...initialData },
    submitted: false,
    submitCount: 0,
    error: undefined
  })

  const { data, submitCount } = form

  const updateFormData = (formDataKey: string, value: any) => {
    setForm(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [formDataKey]: value
      }
    }))
  }

  const handleSubmit = () => {
    const isValid = true // TODO: Write is valid function
    setForm((prevState: PackageFormType) => ({
      ...prevState,
      submitted: true,
      error: isValid ? undefined : { message: 'Error' },
      submitCount: prevState.submitCount + 1
    }))
  }

  const toggleOriginDestination = () => {
    setForm(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        origin: prevState.data.destination,
        destination: prevState.data.origin
      }
    }))
  }

  useEffect(() => {
    if (onChange) onChange(form.data)
  }, [form.data])

  useEffect(() => {
    if (onSubmit && submitCount > 0) {
      onSubmit(form)
    }
  }, [submitCount])

  const className = clsx(classNameProp, classes.root)

  return (
    <div className={className}>
      <AppBar
        className={classes.header}
        position="relative"
        color="transparent"
      >
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.main}>
        <div className={classes.originDestination}>
          <DialogPlaceInput
            label="Origin: "
            className={classes.origin}
            showStartAdornment={false}
            fetchPlaces={fetchPlaces}
            onPlaceChange={p => updateFormData('origin', p)}
            classes={{ label: classes.originLabel, input: classes.originInput }}
            value={data.origin}
          />

          <ButtonBase
            className={classes.toggleOriginDestination}
            onClick={toggleOriginDestination}
          >
            <SwapHoriz />
          </ButtonBase>

          <DialogPlaceInput
            label="Destination: "
            className={classes.destination}
            showStartAdornment={false}
            fetchPlaces={fetchPlaces}
            onPlaceChange={p => updateFormData('destination', p)}
            placeholder="Tap to search"
            classes={{ label: classes.destinationLabel, input: classes.destinationInput }}
            value={data.destination}
          />
        </div>

        <DateRangePicker
          className={classes.dates}
          label="Dates: "
          placeholder="From - To"
          value={form.data.dates || []}
          onChange={dates => updateFormData('dates', dates)}
          classes={{
            inputLabel: classes.datesLabel
          }}
        />

        <DialogRoomsInput
          className={classes.rooms}
          rooms={data.rooms}
          onChange={rooms => updateFormData('rooms', rooms)}
          classes={{
            label: classes.roomsLabel,
            control: classes.roomsControl
          }}
        />
      </div>

      <ButtonBase
        className={classes.submit}
        onClick={handleSubmit}
      >
        Search
      </ButtonBase>
    </div>
  )
}

export default memo(withStyles(styles)(PackageSearchBox))
