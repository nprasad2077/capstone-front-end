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
import MediaPlayer from './components/MediaPlayer/MediaPlayer'
import Home from './components/Home/Home'
import Globe from './components/Globe/Globe'
import Perseverance from './components/Perseverance/Perseverance';
import Astronauts from './components/Astronauts/Astronauts';
import AstroCreate from './components/AstroCreate/AstroCreate';
import Tail from './components/Tail/Tail';
import AstroDetail from './components/AstroDetail/AstroDetail'
import NavHeader from './components/NavHeader/NavHeader';
import Forums from './components/Forums/Forums'

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
  const [mediaForm, setMediaForm] = useState('')
  const [forums, SetForums] = useState('')
  const [sol, setSol] = useState(100)
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  let today = new Date().toISOString().slice(0, 10)
  let roverDate = '2021-' + new Date().toISOString().slice(5, 10)
  let yesterday = (( d => new Date(d.setDate(d.getDate()-1)) )(new Date)).toISOString().slice(0,10)
  let epicDate = (( d => new Date(d.setDate(d.getDate()-2)) )(new Date)).toISOString().slice(0,10)
  const regex = /-/gi
  let date = epicDate.replace(regex, '/')

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
  }

  const showPosition = (position) => {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude);
    setLat(position.coords.latitude)
    setLong(position.coords.longitude)
  }

  
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
      url: `https://epic.gsfc.nasa.gov/api/natural/date/${epicDate}`
    })
    .then(res => setEpic(res.data))
    .catch(err => console.log(err))
  }

  const getAstro = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://polar-everglades-56224.herokuapp.com/astronauts/'
    })
    .then(res => setAstro(res.data))
    .catch(err => console.log(err))
  }

  const getPersRover = async () => {
    const response = await axios({
      method: 'get',
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=600&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    })
    .then(res => setPersRover(res.data))
    .catch(err => console.log(err))
  }

  const getForums = async () => {
    const repsonse = await axios({
      method: 'get', 
      url: 'https://polar-everglades-56224.herokuapp.com/forums/'
    })
    .then(res => SetForums(res.data))
    .catch(err => console.log(err))
  }

  console.log(forums);

  useEffect(() => {
    getASOD()
    getNEO()
    getRover()
    getEPIC()
    getPersRover()
    getAstro()
    getLocation()
    getForums()
  }, [])


  const getSearch = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://images-api.nasa.gov/search?q=' + mediaInput
    })
    .then(res => setSearch(res.data))
    .catch(err => console.log(err))
  }

  const searchDetails = search.collection && search.collection.items

  const searchMapped = search.collection && searchDetails.map((search, index) => <Link to={'media/'+ index}>{search.data[0].title}<br></br></Link>)





  return (
    <div class='bg-slate-700 text-slate-100 flex-col grow flex-wrap'>
      <div>
        <NavHeader />
      </div>
      <Helmet>
        <script src='../node_modules/flowbite/dist/flowbite.js' type='text/javascript' />
      </Helmet>
      <Routes>
        <Route path='/' element={<Home asod={asod} eonet={eonet} neo={neo} rover={rover} today={today} epic={epic} roverDate={roverDate} search={search} sol={sol} setSearch={setSearch} searchMapped={searchMapped} mediaInput={mediaInput} getSearch={getSearch} setMediaInput={setMediaInput} mediaForm={mediaForm} setMediaForm={setMediaForm} date={date}/>} />
        <Route path='/media/:index/' element={<MediaPlayer search={search} />} />
        <Route path='/globe/' element={<Globe lat={lat} long={long} setLong={setLong} setLat={setLat} />} />
        <Route path='/persrover/' element={<Perseverance persRover={persRover}/>} />
        <Route path='/astronauts/' element={<Astronauts astro={astro} />} />
        <Route path='/astronauts/create/' element={<AstroCreate />} />
        <Route path='/astronauts/:id' element={<AstroDetail astro={astro} getAstro={getAstro} />} />
        <Route path='/forums' element={<Forums forums={forums}/>} />
      </Routes>
      <Tail />
    </div>
  )
}

export default App