import React, { useEffect } from 'react'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Apartment from '@material-ui/icons/Apartment'
import Flight from '@material-ui/icons/Flight'

import { withStyles, Theme } from '@material-ui/core/styles'

const TabServices = (
  {
    classes,
    onChange,
    value: initialValue
  }
) => {
  const [value, setValue] = React.useState(initialValue)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <Tabs
      textColor="primary"
      indicatorColor="secondary"
      value={value}
      onChange={handleChange}
      aria-label="simple tabs example"
    >
      <Tab
        label="Hotels"
        icon={<Apartment className={classes.hotelIcon} />}
        value="hotels"
      />
      <Tab
        label="Flights"
        icon={<Flight className={classes.flightIcon} />}
        value="flights"
      />
      <Tab
        label="Packages"
        icon={(
          <div className={classes.packageIcon}>
            <Apartment />
            <Flight />
          </div>
        )}
        value="packages"
      />
    </Tabs>
  )
}

const styles = (theme: Theme) => ({
  root: {

  },

  packageIcon: {
    display: 'flex'
  }
})

export default withStyles(styles)(TabServices)
