import React from 'react'

// Components
import ASOD from '../ASOD/ASOD'
import EONET from '../Asteroids/Asteroids'
import Rover from '../Rover/Rover'


const Dashboard = ({asod, eonet, neo, rover}) => {
  return (
    <div class='flex mt-6'>
      <div class='w-1/3'>
        <ASOD asod={asod}/>
      </div>
      <div class='w-1/3'>
        <EONET neo={neo}/>
      </div>
      <div class='w-1/3'>
        <Rover rover={rover}/>
      </div>
    </div>
  )
}

export default Dashboard