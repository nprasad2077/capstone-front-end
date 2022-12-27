import React from 'react'

// Components
import ASOD from '../ASOD/ASOD'
import EONET from '../Asteroids/Asteroids'
import Rover from '../Rover/Rover'
import EPIC from '../EPIC/EPIC'


const Dashboard = ({asod, eonet, neo, rover, today, epic}) => {
  return (
    <div class='flex mt-6'>
      <div class='w-1/4'>
        <ASOD asod={asod}/>
      </div>
      <div class='w-1/4'>
        <EONET neo={neo} today={today}/>
      </div>
      <div class='w-1/4'>
        <Rover rover={rover}/>
      </div>
      <div class='w-1/4'>
        <EPIC epic={epic} />
      </div>
    </div>
  )
}

export default Dashboard