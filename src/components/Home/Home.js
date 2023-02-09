import React from 'react'

// components
import Dashboard from '../Dashboard/Dashboard'
import DashboardTwo from '../DashboardTwo/DashboardTwo'

const Home = ({asod, mongoSpread, eonet, neo, rover, today, epic, roverDate, search, setSearch, searchMapped, mediaInput, setMediaInput, sol, getSearch, mediaForm, setMediaForm, date}) => {
  return (
    <div>
      <div>
        <Dashboard asod={asod} mongoSpread={mongoSpread}  eonet={eonet} neo={neo} rover={rover} today={today} epic={epic} roverDate={roverDate} sol={sol} />
      </div>
      <div>
        <DashboardTwo epic={epic} date={date} search={search} setSearch={setSearch} searchMapped={searchMapped} mediaInput={mediaInput} setMediaInput={setMediaInput} getSearch={getSearch} mediaForm={mediaForm} setMediaForm={setMediaForm}/>
      </div>
    </div>
  )
}

export default Home