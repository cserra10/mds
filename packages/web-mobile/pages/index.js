import React, { useState } from 'react'
import {
  Header,
  HotelSearchBox,
  PackageSearchBox,
  FlightSearchBox,
  TabServices
} from '@keldor/ui'
import fetchPlaces from '../fetchPlaces'

const Home = () => {
  const [currentProduct, setCurrentProduct] = useState('hotels')

  return (
    <div>
      <Header title="BestDay" />

      <TabServices
        value={currentProduct}
        onChange={setCurrentProduct}
      />

      { currentProduct === 'hotels' && (
        <HotelSearchBox
          fetchPlaces={fetchPlaces}
          onSubmit={data => console.log(data)}
        />
      )}

      { currentProduct === 'flights' && (
        <FlightSearchBox
          fetchPlaces={fetchPlaces}
          onSubmit={data => console.log(data)}
        />
      )}

      { currentProduct === 'packages' && (
        <PackageSearchBox
          fetchPlaces={fetchPlaces}
          onSubmit={data => console.log(data)}
        />
      )}
    </div>
  )
}

export default Home
