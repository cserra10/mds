import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

interface IProps {
  headingText: string
  buttonText: string
}

const Hello: React.FC<IProps> = (
  {
    headingText = 'Hello component',
    buttonText = 'OK'
  }: IProps
) => (
  <div>
    <Typography
      variant="body1"
      color="textPrimary"
    >
      {headingText}
    </Typography>
    <Button
      color="primary"
      variant="contained"
    >
      {buttonText}
    </Button>
  </div>
)

export default Hello
