import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { action } from '@storybook/addon-actions'
import { DateRangePicker } from '@mds/ui'

export default {
  component: DateRangePicker,
  title: 'common/DateRangePicker',
  decorators: [
    storyFn => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>{storyFn()}</MuiPickersUtilsProvider>
    )
  ]
}

export const Default = () => (
  <DateRangePicker
    value={[]}
    onChange={action('on change')}
    disablePast
  />
)
