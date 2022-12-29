import React from 'react'
import {Cartesian3} from 'cesium'
import { Color } from "cesium";
import { Viewer, Entity } from "resium";

const position = Cartesian3.fromDegrees( -95.36200, 29.75060, 0)
const pointGraphics = { pixelSize: 10 }

const Globe = () => {
  return (
    <div class='text-center'>
      <h2 class='text-3xl'>GLOBE</h2>

      <Viewer>
        <Entity position={position} point={pointGraphics} />
      </Viewer>
    </div>
  )
}

export default Globe