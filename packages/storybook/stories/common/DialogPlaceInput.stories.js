import React, { useEffect, useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { DialogPlaceInput } from '@keldor/ui'
import fetchPlaces from '../../mocks/fetchPlaces'

export default {
  component: DialogPlaceInput,
  title: 'common/DialogPlaceInput',
  decorators: [withKnobs]
}

const PlaceInputDemo = ({ onChange }) => {
  const [place, setPlace] = useState(null)

  useEffect(() => {
    onChange(place)
  }, [place])

  return (
    <DialogPlaceInput
      fetchPlaces={fetchPlaces}
      onPlaceChange={setPlace}
      value={place}
    />
  )
}

export const Default = (
  () => <PlaceInputDemo onChange={action('onChange')} />
)
