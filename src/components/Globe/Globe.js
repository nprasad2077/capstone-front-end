import React from 'react'
import {Cartesian3, createWorldTerrain} from 'cesium'
import { Color } from "cesium";
import { Viewer, Entity, PointGraphics, EntityDescription, CameraFlyTo, ImageryLayer} from "resium";
import { useState } from 'react';
import { ArcGisMapServerImageryProvider } from 'cesium';

const imageryProvider = new ArcGisMapServerImageryProvider({
  url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
})


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
      {/* <div class='mt-4'>
        <label for="small-input" class="block mb-2 text-sm font-medium text-white">latitude</label>
        <input onChange={latpos} type="text" id="small-input" class="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        
      </div>
      <div class='mt-2'>
        <label for="small-input" class="block mb-2 text-sm font-medium text-white">longitude</label>
        <input onChange={longpos} type="text" id="small-input" class="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div>
      <button onClick={positionChange} type="button " class="text-white mt-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Set</button>
      </div> */}
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