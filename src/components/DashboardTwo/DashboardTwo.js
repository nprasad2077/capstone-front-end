import React from 'react'

import SlideShow from '../SlideShow/SlideShow'
import EPIC from '../EPIC/EPIC'

const DashboardTwo = ({epic}) => {
  return (
    <div class='flex'>
        <div class='w-1/3'>
            <SlideShow epic={epic} />
        </div>
        <div class='w-1/3'>
            <EPIC epic={epic}/>

        </div>
    </div>
  )
}

export default DashboardTwo