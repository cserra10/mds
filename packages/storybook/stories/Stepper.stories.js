import React, { useState } from 'react'
import { Stepper } from '@keldor/ui'

export default { title: 'common/Stepper' }

export const Default = () => {
  const [value, setValue] = useState(0)

  return (
    <Stepper
      value={value}
      onChange={setValue}
    />
  )
}
