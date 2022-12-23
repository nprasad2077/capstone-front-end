import React from 'react'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

// Components

import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  const [asod, setAsod] = useState('')
  const [eonet, setEonet] = useState('')
  const [neo, setNeo] = useState('')

  const getASOD = async () => {
    const response = await axios({
      method: 'get',
      url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    })
    .then(res => 
        setAsod(res.data))
    .catch(err => console.log(err))
  }

  const getNEO = async () => {
    const response = await axios({
      method: 'get',
      url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-12-23&end_date=2022-12-23&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    })
    .then(res =>
        setNeo(res.data))
    .catch(err => console.log(err))
  }

  // console.log(process.env.REACT_APP_NASA_API_KEY);
  // console.log(asod);

  useEffect(() => {
    getASOD()
    getNEO()
  }, [])

  console.log(neo);


  return (
    <div class='bg-slate-700 text-slate-100'>
      <Header />
      <Dashboard asod={asod} eonet={eonet} neo={neo} />
    </div>
  )
}

export default App