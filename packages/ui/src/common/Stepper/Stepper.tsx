import React, { useEffect, memo } from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonBase from '@material-ui/core/ButtonBase'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'
import { Props } from './types'
import styles from './styles'

const Stepper: React.FC<Props> = (props: Props) => {
  const {
    className: classNameProp,
    classes,
    value: valueProp = 0,
    minValue = 0,
    maxValue = 100,
    onChange
  } = props

  const [value, setValue] = React.useState<number>(valueProp)

  const handleDecrease = () => {
    if (value > minValue) {
      setValue(prevState => prevState - 1)
    }
  }

  const handleIncrease = () => {
    if (value < maxValue) {
      setValue(prevState => prevState + 1)
    }
  }

  useEffect(() => {
    if (onChange) onChange(value)
  }, [value])

  const className = clsx(classNameProp, classes.root)

  return (
    <Box className={className}>
      <ButtonBase
        className={classes.decreaseButton}
        role="button"
        onClick={handleDecrease}
      >
        <RemoveIcon />
      </ButtonBase>

      <Typography className={classes.input}>
        {value}
      </Typography>

      <ButtonBase
        className={classes.increaseButton}
        role="button"
        onClick={handleIncrease}
      >
        <AddIcon />
      </ButtonBase>
    </Box>
  )
}

export default memo(withStyles(styles)(Stepper))
