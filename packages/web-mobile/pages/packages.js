import React from 'react'
import { PackageSearchBox } from '@keldor/ui'
import fetchPlaces from '../fetchPlaces'

const Home = () => {
  return (
    <div>
      <PackageSearchBox
        fetchPlaces={fetchPlaces}
        onSubmit={data => console.log(data)}
      />
    </div>
  )
}

export default Home
