import React from 'react'
import {Cartesian3} from 'cesium'
import { Color } from "cesium";
import { Viewer, Entity, PointGraphics, EntityDescription } from "resium";
import { useState } from 'react';

const position = Cartesian3.fromDegrees( -95.36200, 29.75060, 0)
const pointGraphics = { pixelSize: 10 }


const Globe = () => {
  const [pixelNum, setPixelNum] = useState(20)


  return (
    <div class='text-center'>
      <h2 class='text-3xl'>GLOBE</h2>
      <Viewer>
        <Entity position={position} name='Houston'>
          <PointGraphics pixelSize={pixelNum} />
          <EntityDescription>
            <h1>Hello, world!</h1>
            <p>JSX works here!</p>
          </EntityDescription>
        </Entity>
      </Viewer>
    </div>
  )
}

export default Globe