import React from 'react'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

// Components

import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  const [asod, setAsod] = useState('')

  const getASOD = async () => {
    const response = await axios({
      method: 'get',
      url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    })
    .then(res => 
        setAsod(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getASOD()
  }, [])

  // console.log(process.env.REACT_APP_NASA_API_KEY);
  console.log(asod);


  return (
    <div class='bg-slate-700 text-slate-100'>
      <Header />
      <Dashboard asod={asod} />
    </div>
  )
}

export default App