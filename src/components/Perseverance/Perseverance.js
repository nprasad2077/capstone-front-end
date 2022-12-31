import React from 'react'
import { useState } from 'react';


const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=1&api_key=DEMO_KEY'

const Perseverance = ({persRover}) => {
  console.log(persRover.photos);
  const persRoverMapped = persRover.photos && persRover.photos.map((rover) => rover.camera.name)
  // const [medaSky, setMedaSky] = useState([])
  const medaSkyPics = []
console.log(persRoverMapped);

  return (
    <div>

    </div>
  )
}

export default Perseverance