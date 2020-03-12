import React, { useEffect } from 'react'
import clsx from 'clsx'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Apartment from '@material-ui/icons/Apartment'
import Flight from '@material-ui/icons/Flight'
import { withStyles } from '@material-ui/core/styles'
import { Props } from './types'
import styles from './styles'

const TabServices = (
  {
    className: classNameProp,
    classes,
    onChange,
    value: initialValue
  } : Props
) => {
  const [value, setValue] = React.useState(initialValue)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    onChange(value)
  }, [value])

  const className = clsx(classNameProp, classes.root)
  const tabClasses = { root: classes.tab, selected: classes.selectedTab }

  return (
    <Tabs
      className={className}
      textColor="primary"
      indicatorColor="secondary"
      value={value}
      onChange={handleChange}
      aria-label="simple tabs example"
    >
      <Tab
        classes={tabClasses}
        label="Hotels"
        icon={<Apartment className={classes.tabIcon} />}
        value="hotels"
      />
      <Tab
        classes={tabClasses}
        label="Flights"
        icon={<Flight className={classes.tabIcon} />}
        value="flights"
      />
      <Tab
        classes={tabClasses}
        label="Packages"
        icon={(
          <div className={`${classes.tabIcon} ${classes.tabIconPackage}`}>
            <Apartment />
            <Flight />
          </div>
        )}
        value="packages"
      />
    </Tabs>
  )
}

export default withStyles(styles)(TabServices)
