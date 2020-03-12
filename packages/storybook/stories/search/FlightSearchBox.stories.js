import React from 'react'
import { action } from '@storybook/addon-actions'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { FlightSearchBox } from '@keldor/ui'
import fetchPlaces from '../../mocks/fetchPlaces'

export default {
  component: FlightSearchBox,
  title: 'searchBox/Flight',
  decorators: [
    storyFn => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>{storyFn()}</MuiPickersUtilsProvider>
    )
  ]
}

export const Default = () => {
  return (
    <FlightSearchBox
      fetchPlaces={fetchPlaces}
      onChange={action('onChange')}
      onSubmit={action('onSubmit')}
    />
  )
}
