import React from 'react'
import {Cartesian3, createWorldTerrain} from 'cesium'
import { Color } from "cesium";
import { Viewer, Entity, PointGraphics, EntityDescription, CameraFlyTo, ImageryLayer} from "resium";
import { useState } from 'react';
import { ArcGisMapServerImageryProvider } from 'cesium';


const Globe = ({lat, long, setLat, setLong}) => {
  const [pixelNum, setPixelNum] = useState(20)
  console.log(long, lat);
  const [latChange, setLatChange] = useState(0)
  const [longChange, setLongChange] = useState(0)

  const position = Cartesian3.fromDegrees( long, lat, 1000)

  const terrtainProvider = createWorldTerrain({
        requestWaterMask : true,
        requestVertexNormals : true
  })

  const latpos = (e) => {
    setLatChange(parseInt(e.target.value))
  }

  const longpos = (e) => {
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

