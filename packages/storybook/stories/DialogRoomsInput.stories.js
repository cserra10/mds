import React, { useEffect, useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { DialogRoomsInput } from '@mds/ui'

export default {
  component: DialogRoomsInput,
  title: 'common/DialogRoomsInput',
  decorators: [withKnobs]
}

const DialogRoomsInputDemo = ({ onChange }) => {
  const [rooms, setRooms] = useState([{ adults: 2, children: 0, childrenAges: [] }])

  useEffect(() => {
    onChange(rooms)
  }, [rooms])

  return (
    <DialogRoomsInput
      onChange={setRooms}
      rooms={rooms}
    />
  )
}

export const Default = (
  () => <DialogRoomsInputDemo onChange={action('onChange')} />
)
