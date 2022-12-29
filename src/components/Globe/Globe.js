import React from 'react'
import {Cartesian3} from 'cesium'
import { Color } from "cesium";
import { Viewer, Entity } from "resium";

const Globe = () => {
  return (
    <div class='text-center'>
      <h2 class='text-3xl'>GLOBE</h2>

      <Viewer full />


    </div>
  )
}

export default Globe