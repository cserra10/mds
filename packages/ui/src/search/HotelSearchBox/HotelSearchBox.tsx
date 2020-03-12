import React, { memo, useEffect, useState } from 'react'
import clsx from 'clsx'
import shortid from 'shortid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import DateRangePicker from '../../common/DateRangePicker'
import DialogPlaceInput from '../../common/DialogPlaceInput'
import DialogPaxesInput from '../../common/DialogPaxesInput'
import { Props, HotelFormType } from './types'
import styles from './styles'

const HotelSearchBox: React.FunctionComponent<Props> = (
  {
    id = shortid.generate(),
    className: classNameProp,
    classes,
    onChange,
    onSubmit,
    fetchPlaces,
    title = 'Search Hotels',
    initialData = {
      destination: undefined,
      dates: [],
      paxes: { adults: 1, children: 0, childrenAges: [] }
    }
  }: Props
) => {
  const [form, setForm] = useState<HotelFormType>({
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
    setForm((prevState: HotelFormType) => ({
      ...prevState,
      submitted: true,
      error: isValid ? undefined : { message: 'Error' },
      submitCount: prevState.submitCount + 1
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
        <DialogPlaceInput
          label="Destination: "
          className={classes.destination}
          showStartAdornment={false}
          fetchPlaces={fetchPlaces}
          onPlaceChange={p => updateFormData('destination', p)}
          classes={{ label: classes.destinationLabel, input: classes.destinationInput }}
          value={data.destination}
        />

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

        <DialogPaxesInput
          className={classes.paxes}
          paxes={data.paxes}
          onChange={rooms => updateFormData('paxes', rooms)}
          classes={{
            label: classes.paxesLabel,
            control: classes.paxesControl
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

export default memo(withStyles(styles)(HotelSearchBox))
