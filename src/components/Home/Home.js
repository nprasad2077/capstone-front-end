import React from 'react'

// components
import Dashboard from '../Dashboard/Dashboard'
import DashboardTwo from '../DashboardTwo/DashboardTwo'

const Home = ({asod, eonet, neo, rover, today, epic, roverDate, search, setSearch, searchMapped, mediaInput, setMediaInput, sol}) => {
  return (
    <div>
      <p>Home</p>
      <div>
        <Dashboard asod={asod} eonet={eonet} neo={neo} rover={rover} today={today} epic={epic} roverDate={roverDate} sol={sol} />
      </div>
      <div>
        <DashboardTwo epic={epic} search={search} setSearch={setSearch} searchMapped={searchMapped} mediaInput={mediaInput} setMediaInput={setMediaInput} />
      </div>



    </div>
  )
}

export default Home