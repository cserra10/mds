import React from 'react'
import { action } from '@storybook/addon-actions'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { PackageSearchBox } from '@mds/ui'
import fetchPlaces from '../../mocks/fetchPlaces'

export default {
  component: PackageSearchBox,
  title: 'searchBox/Flight + Hotel',
  decorators: [
    storyFn => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>{storyFn()}</MuiPickersUtilsProvider>
    )
  ]
}

export const Default = () => {
  return (
    <PackageSearchBox
      fetchPlaces={fetchPlaces}
      onChange={action('onChange')}
      onSubmit={action('onSubmit')}
    />
  )
}
