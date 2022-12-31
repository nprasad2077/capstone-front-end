import React from 'react'
import { useState } from 'react';


const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=1&api_key=DEMO_KEY'

const Perseverance = ({persRover}) => {
  console.log(persRover.photos);
  const navcamLeft = []
  const navcamLeftDate = []

  function parsePersRover(rov) {
    if (rov.camera.name === 'NAVCAM_LEFT') {
      navcamLeft.push(rov.img_src)
      navcamLeftDate.push(rov.earth_date)
    }

  }

  const persRoverMapped = persRover.photos && persRover.photos.map((rover) => parsePersRover(rover))

  console.log(persRoverMapped);
  console.log(navcamLeft, navcamLeftDate);




  return (
    <div>

    </div>
  )
}

export default Perseverance