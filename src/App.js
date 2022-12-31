import React from 'react'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Script
import { Helmet } from 'react-helmet';
// Components

import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import DashboardTwo from './components/DashboardTwo/DashboardTwo';
import MediaPlayer from './components/MediaPlayer/MediaPlayer'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav';
import Globe from './components/Globe/Globe'
import Perseverance from './components/Perseverance/Perseverance';

const App = () => {
  const [asod, setAsod] = useState('')
  const [eonet, setEonet] = useState('')
  const [neo, setNeo] = useState('')
  const [rover, setRover] = useState('')
  const [epic, setEpic] = useState('')
  const [search, setSearch] = useState([])
  const [mediaInput, setMediaInput] = useState('')
  const [astro, setAstro] = useState('')
  const [mongo, setMongo] = useState('')
  const [persRover, setPersRover] = useState([])

  let today = new Date().toISOString().slice(0, 10)
  let roverDate = '2021-' + new Date().toISOString().slice(5, 10)
  const [sol, setSol] = useState(100)

  // console.log(roverDate);

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
      url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=`+ today +`&end_date=`+ today +`&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    })
    .then(res =>
        setNeo(res.data))
    .catch(err => console.log(err))
  }

  // console.log(process.env.REACT_APP_NASA_API_KEY);
  // console.log(asod);
  // console.log(neo);

  const getRover = async () => {
    const response = await axios({
      method: 'get',
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    })
    .then(res => setRover(res.data))
    .catch(err => console.log(err))
  }

  const getEPIC = async () => {
    const response = await axios({
      method: 'get',
      url: `https://epic.gsfc.nasa.gov/api/natural/date/2022-12-25`
    })
    .then(res => setEpic(res.data))
    .catch(err => console.log(err))
  }

  const getAstro = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8000/astronauts/'
    })
    .then(res => setAstro(res.data))
    .catch(err => console.log(err))
  }

  const getMongo = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/'
    })
    .then(res => setMongo(res.data))
    .catch(err => console.log(err))
  }

  const getPersRover = async () => {
    const response = await axios({
      method: 'get',
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=100&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    })
    .then(res => setPersRover(res.data))
    .catch(err => console.log(err))
  }



  useEffect(() => {
    getASOD()
    getNEO()
    getRover()
    getEPIC()
    getPersRover()
    // getAstro()
    // getMongo()
  }, [])

  // console.log(epic);
  // console.log(rover);
  // console.log(astro);
  // console.log(mongo);
  // console.log(persRover);

  const getSearch = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://images-api.nasa.gov/search?q=moon'
    })
    .then(res => setSearch(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getSearch()
  }, [])

  // console.log(search);

  const searchDetails = search.collection && search.collection.items

  // console.log(searchDetails);

  const searchMapped = search.collection && searchDetails.map((search, index) => <Link to={'media/'+ index}>{search.data[0].title}</Link>)

  // console.log(mediaInput);




  return (
    <div class='bg-slate-700 text-slate-100'>
      <div>
        {/* <Header /> */}
        <Nav />
      </div>
      <Helmet>
        <script src='../node_modules/flowbite/dist/flowbite.js' type='text/javascript' />
      </Helmet>
      <Routes>
        <Route path='/' element={<Home asod={asod} eonet={eonet} neo={neo} rover={rover} today={today} epic={epic} roverDate={roverDate} search={search} sol={sol} setSearch={setSearch} searchMapped={searchMapped} mediaInput={mediaInput} setMediaInput={setMediaInput} />} />
        <Route path='/media/:index' element={<MediaPlayer search={search} />} />
        <Route path='/globe' element={<Globe />} />
        <Route path='/persrover' element={<Perseverance persRover={persRover}/>} />
      </Routes>
    </div>
  )
}

export default App