import React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { Props } from './types'
import styles from './styles'

const Hello = (
  {
    className: classNameProp,
    classes
  } : Props
) => {
  const className = clsx(classNameProp, classes.root)

  return (
    <div className={className}>
      Hello Component
    </div>
  )
}

export default withStyles(styles)(Hello)
