import React from 'react'

// Components
import ASOD from '../ASOD/ASOD'
import EONET from '../Asteroids/Asteroids'
import Rover from '../Rover/Rover'


const Dashboard = ({asod, eonet, neo, rover}) => {
  return (
    <div class='flex'>
      <div>
        <ASOD asod={asod}/>
      </div>
      <div>
        <EONET neo={neo}/>
      </div>
      <div>
        <Rover rover={rover}/>
      </div>
    </div>
  )
}

export default Dashboard