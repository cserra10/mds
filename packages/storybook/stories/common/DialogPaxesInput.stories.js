import React, { useEffect, useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { DialogPaxesInput } from '@keldor/ui'

export default {
  component: DialogPaxesInput,
  title: 'common/DialogPaxesInput',
  decorators: [withKnobs]
}

const DialogPaxesInputDemo = ({ onChange }) => {
  const [paxes, setPaxes] = useState({ adults: 2, children: 0, childrenAges: [] })

  useEffect(() => {
    onChange(paxes)
  }, [paxes])

  return (
    <DialogPaxesInput
      onChange={setPaxes}
      paxes={paxes}
    />
  )
}

export const Default = (
  () => <DialogPaxesInputDemo onChange={action('onChange')} />
)
