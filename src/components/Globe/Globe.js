import React from 'react'
import {Cartesian3} from 'cesium'
import { Viewer, Entity} from "resium";



const Globe = ({lat, long, setLat, setLong}) => {
  const point = {pixelSize: 10}

  const position = Cartesian3.fromDegrees( long, lat, 1000)
  const positionTwo = Cartesian3.fromDegrees( -74, 40, 100)


  return (
      <Viewer full>
        <Entity position={positionTwo} point={point} />
      </Viewer>
  )
}

export default Globe

