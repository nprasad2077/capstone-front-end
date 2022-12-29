import React from 'react'
import {Cartesian3} from 'cesium'
import { Color } from "cesium";
import { Viewer, Entity, PointGraphics } from "resium";
import { useState } from 'react';

const position = Cartesian3.fromDegrees( -95.36200, 29.75060, 0)
const pointGraphics = { pixelSize: 10 }


const Globe = () => {
  const [pixelNum, setPixelNum] = useState(20)


  return (
    <div class='text-center'>
      <h2 class='text-3xl'>GLOBE</h2>

      <Viewer>
        <Entity position={position} name='Houston' description='Hello, world!'>
          <PointGraphics pixelSize={pixelNum} />
        </Entity>
      </Viewer>
    </div>
  )
}

export default Globe