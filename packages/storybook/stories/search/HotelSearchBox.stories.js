import React from 'react'
import { action } from '@storybook/addon-actions'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { HotelSearchBox } from '@keldor/ui'
import fetchPlaces from '../../mocks/fetchPlaces'

export default {
  component: HotelSearchBox,
  title: 'searchBox/Hotel',
  decorators: [
    storyFn => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>{storyFn()}</MuiPickersUtilsProvider>
    )
  ]
}

export const Default = () => {
  return (
    <HotelSearchBox
      fetchPlaces={fetchPlaces}
      onChange={action('onChange')}
      onSubmit={action('onSubmit')}
    />
  )
}
