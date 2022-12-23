import React from 'react'

// Components
import ASOD from '../ASOD/ASOD'


const Dashboard = ({asod}) => {
  return (
    <div>
      <ASOD asod={asod}/>
    </div>
  )
}

export default Dashboard