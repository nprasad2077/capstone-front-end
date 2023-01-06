import React from 'react'
import {Cartesian3, createWorldTerrain} from 'cesium'
import { Color } from "cesium";
import { Viewer, Entity, PointGraphics, EntityDescription, CameraFlyTo } from "resium";
import { useState } from 'react';

const position = Cartesian3.fromDegrees( -95.36200, 29.75060, 1000)
// const pointGraphics = { pixelSize: 10 }
const terrtainProvider = createWorldTerrain({
        requestWaterMask : true,
        requestVertexNormals : true
})


const Globe = () => {
  const [pixelNum, setPixelNum] = useState(20)


  return (
    <div class='text-center'>
      <h2 class='text-3xl'>GLOBE</h2>
      <Viewer terrtainProvider={terrtainProvider}>
        <CameraFlyTo duration={5} destination={position} once={'once'} />
      </Viewer>
    </div>
  )
}

export default Globe



{/* <div class='text-center'>
<h2 class='text-3xl'>GLOBE</h2>
<Viewer terrtainProvider={terrtainProvider}>
  <Entity position={position} name='Houston'>
    <PointGraphics pixelSize={pixelNum} />
    <EntityDescription>
      <h1>Hello, world!</h1>
      <p>JSX works here!</p>
    </EntityDescription>
  </Entity>
</Viewer>
</div> */}