import React from 'react'

// components
import Dashboard from '../Dashboard/Dashboard'
import DashboardTwo from '../DashboardTwo/DashboardTwo'
import Gallery from '../Gallery/Gallery'

const Home = ({asod, eonet, neo, rover, today, epic, roverDate, search, setSearch, searchMapped, mediaInput, setMediaInput, sol, getSearch, mediaForm, setMediaForm}) => {
  return (
    <div>
      <div>
        <Dashboard asod={asod} eonet={eonet} neo={neo} rover={rover} today={today} epic={epic} roverDate={roverDate} sol={sol} />
      </div>
      <div>
        <DashboardTwo epic={epic} search={search} setSearch={setSearch} searchMapped={searchMapped} mediaInput={mediaInput} setMediaInput={setMediaInput} getSearch={getSearch} mediaForm={mediaForm} setMediaForm={setMediaForm}/>
      </div>
      {/* <div class='w-1/3'>
        <Gallery />
      </div> */}
    </div>
  )
}

export default Home