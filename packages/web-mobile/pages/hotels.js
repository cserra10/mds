import React from 'react'
import { HotelSearchBox, PackageSearchBox } from '@keldor/ui'
import fetchPlaces from '../fetchPlaces'

const Home = () => {
  return (
    <div>
      <HotelSearchBox
        fetchPlaces={fetchPlaces}
        onSubmit={data => console.log(data)}
      />
    </div>
  )
}

export default Home
