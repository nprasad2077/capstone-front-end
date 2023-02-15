import React from 'react'
import {Cartesian3} from 'cesium'
import { Viewer, Entity, EntityDescription, CameraFlyTo, PointGraphics} from "resium";



const Globe = ({lat, long}) => {
  const point = {pixelSize: 10}
  const globeStyle = {
    position: "absolute",
    top: 72,
    left: 0,
    right: 0,
    bottom: 0,
  }

  const position = Cartesian3.fromDegrees( long, lat, 1000)
  const positionTwo = Cartesian3.fromDegrees( -74, 40, 1000)

  return (
  
      <div class='w-full h-screen'>
        <Viewer style={globeStyle} homeButton={true}>
          <CameraFlyTo duration={5} destination={position}>
          <Entity>
            <PointGraphics pixelSize={10} />
            <EntityDescription>
              <h1>Test</h1>
            </EntityDescription>
          </Entity>
          </CameraFlyTo>
        </Viewer>
      </div>
  )
}

export default Globe

