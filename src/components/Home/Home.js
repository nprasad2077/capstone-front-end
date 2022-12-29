import React from 'react'

// components
import Dashboard from '../Dashboard/Dashboard'
import DashboardTwo from '../DashboardTwo/DashboardTwo'

const Home = ({asod, eonet, neo, rover, today, epic, roverDate}) => {
  return (
    <div>
      <p>Home</p>
      <div>
        <Dashboard asod={asod} eonet={eonet} neo={neo} rover={rover} today={today} epic={epic} roverDate={roverDate}/>
      </div>
      <div>
        <DashboardTwo epic={epic} />
      </div>



    </div>
  )
}

export default Home