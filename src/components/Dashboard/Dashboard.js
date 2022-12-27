import React from 'react'

// Components
import ASOD from '../ASOD/ASOD'
import EONET from '../Asteroids/Asteroids'
import Rover from '../Rover/Rover'
import EPIC from '../EPIC/EPIC'
import SlideShow from '../SlideShow/SlideShow'


const Dashboard = ({asod, eonet, neo, rover, today, epic, roverDate}) => {
  return (
    <div class='flex mt-6'>
      <div class='w-1/3'>
        <ASOD asod={asod}/>
      </div>
      <div class='w-1/3'>
        <EONET neo={neo} today={today}/>
      </div>
      <div class='w-1/3'>
        <Rover rover={rover} roverDate={roverDate}/>
      </div>
      {/* <div class='w-1/4'>
        <EPIC epic={epic} />
      </div> */}
      {/* <div class='w-1/4'>
        <SlideShow epic={epic} />
      </div> */}
    </div>
  )
}

export default Dashboard