import React from 'react'

// Components
import ASOD from '../ASOD/ASOD'
import EONET from '../Asteroids/Asteroids'
import Rover from '../Rover/Rover'

const Dashboard = ({asod, eonet, neo, rover, today, epic, roverDate, sol}) => {
  return (
    <div class='flex'>
      <div class='flex-1'>
        <ASOD asod={asod}/>
      </div>
      <div class='flex-1'>
        <EONET neo={neo} today={today}/>
      </div>
      <div class='flex-1 overflow-visible object-contain'>
        <Rover rover={rover} roverDate={roverDate} sol={sol} />
      </div>
    </div>
  )
}

export default Dashboard