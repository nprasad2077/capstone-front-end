import React from 'react'
import { useState } from 'react';


const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=1&api_key=DEMO_KEY'

const Perseverance = ({persRover}) => {
  console.log(persRover.photos);
  const navcamLeft = []
  const navcamLeftDate = []
  const mastZoomRight = []
  const mastZoomRightDate = []
  const mastZoomLeft = []
  const mastZoomLeftDate = []

  function parsePersRover(rov) {
    if (rov.camera.name === 'NAVCAM_LEFT') {
      navcamLeft.push(rov.img_src)
      navcamLeftDate.push(rov.earth_date)
    }
    if (rov.camera.name === 'MCZ_RIGHT') {
      mastZoomRight.push(rov.img_src)
      mastZoomRightDate.push(rov.earth_date)
    }
    if (rov.camera.name === 'MCZ_LEFT') {
      mastZoomLeft.push(rov.img_src)
      mastZoomLeftDate.push(rov.earth_date)
    }

  }

  const persRoverMapped = persRover.photos && persRover.photos.map((rover) => parsePersRover(rover))

  console.log(persRoverMapped);
  console.log(mastZoomLeft, mastZoomRightDate);




  return (
    <div>

    </div>
  )
}

export default Perseverance