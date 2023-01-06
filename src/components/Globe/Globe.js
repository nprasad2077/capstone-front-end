import React from 'react'
import {Cartesian3, createWorldTerrain} from 'cesium'
import { Color } from "cesium";
import { Viewer, Entity, PointGraphics, EntityDescription, CameraFlyTo, ImageryLayer} from "resium";
import { useState } from 'react';
import { ArcGisMapServerImageryProvider } from 'cesium';

// const imageryProvider = new ArcGisMapServerImageryProvider({
//   url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
// })


const Globe = ({lat, long, setLat, setLong}) => {
  const [pixelNum, setPixelNum] = useState(20)
  console.log(long, lat);
  const [latChange, setLatChange] = useState(0)
  const [longChange, setLongChange] = useState(0)

  const position = Cartesian3.fromDegrees( long, lat, 1000)
// const pointGraphics = { pixelSize: 10 }
  const terrtainProvider = createWorldTerrain({
        requestWaterMask : true,
        requestVertexNormals : true
  })

  const latpos = (e) => {
    console.log(e.target.value)
    setLatChange(parseInt(e.target.value))
  }

  const longpos = (e) => {
    console.log(e.target.value)
    setLongChange(parseInt(e.target.value))
  }

  const positionChange = (e) => {
    e.preventDefault()
    setLat(latChange)
    setLong(longChange)
  }


  return (
    <div class='text-center'>
      <Viewer fullscreenButton homeButton={true} terrtainProvider={terrtainProvider}>
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