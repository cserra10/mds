import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs'
import { PlaceInput } from '@keldor/ui'
import fetchPlaces from '../mocks/fetchPlaces'

export default {
  component: PlaceInput,
  title: 'common/PlaceInput',
  decorators: [withKnobs]
}

export const Default = (
  () => (
    <PlaceInput
      fetchPlaces={fetchPlaces}
      placeholder={text('placeholder', 'Search places')}
      showHeader={boolean('show header', true)}
      disabled={boolean('disabled', false)}
      onPlaceChange={action('on place change')}
      labelProperty="Label"
    />
  )
)

export const Hotels = (
  () => (
    <PlaceInput
      fetchPlaces={fetchPlaces}
      placeholder="Hotel, city or destination"
      onPlaceChange={action('on place change')}
    />
  )
)

export const Airports = (
  () => (
    <PlaceInput
      fetchPlaces={fetchPlaces}
      placeholder="Airport name"
      onPlaceChange={action('on place change')}
    />
  )
)

export const Tours = (
  () => (
    <PlaceInput
      fetchPlaces={fetchPlaces}
      placeholder="Tour or destination"
      onPlaceChange={action('on place change')}
    />
  )
)
