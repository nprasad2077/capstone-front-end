import React from 'react'

// Components
import ASOD from '../ASOD/ASOD'
import EONET from '../Asteroids/Asteroids'


const Dashboard = ({asod, eonet, neo}) => {
  return (
    <div class='flex'>
      <div>
        <ASOD asod={asod}/>
      </div>
      <div>
        <EONET neo={neo}/>
      </div>
    </div>
  )
}

export default Dashboard