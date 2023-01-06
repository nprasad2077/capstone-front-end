import React from 'react'
import { useState } from 'react'

//Components
import Gallery from '../Gallery/Gallery'

const Rover = ({rover, roverDate, sol}) => {
  const roverARR = rover.photos
  const FHAZ = []
  const RHAZ = []
  const MAST = []
  const CHEM = []
  const NAVCAM = []
  const idFHAZ = []
  const idRHAZ = []
  const idMAST = []
  const idCHEM = []
  const idNAVCAM = []
  const dateFHAZ = []
  const dateRHAZ = []
  const dateMAST = []
  const dateCHEM = []
  const dateNAVCAM = []
  const [displayFHAZ, setDisplayFHAZ] = useState('')
  const [displayRHAZ, setDisplayRHAZ] = useState('')
  const [displayMAST, setDisplayMAST] = useState('')
  const [displayCHEM, setDisplayCHEM] = useState('')
  const [displayNAVCAM, setDisplayNAVCAM] = useState('')
  const solDate = sol.toString()
  function parseRovers(rov) {
    if (rov.camera.name === 'FHAZ') {
      // console.log('we have fhaz')
      FHAZ.push(rov.img_src)
      idFHAZ.push(rov.id)
      dateFHAZ.push(rov.earth_date)
    }
    if (rov.camera.name === 'RHAZ') {
      // console.log('we have rhaz')
      RHAZ.push(rov.img_src)
      idRHAZ.push(rov.id)
      dateRHAZ.push(rov.earth_date)
    }
    if (rov.camera.name === 'MAST') {
      // console.log('we have mast')
      MAST.push(rov.img_src)
      idMAST.push(rov.id)
      dateMAST.push(rov.earth_date)
    }
    if (rov.camera.name === 'CHEMCAM') {
      // console.log('chem')
      CHEM.push(rov.img_src)
      idCHEM.push(rov.id)
      dateCHEM.push(rov.earth_date)
    }
    if (rov.camera.name === 'NAVCAM') {
      // console.log('navcam')
      NAVCAM.push(rov.img_src)
      idNAVCAM.push(rov.id)
      dateNAVCAM.push(rov.earth_date)
    }
  }

  const roverMapped = rover && roverARR.map((rovers) => parseRovers(rovers))

  function randomFHAZ () {
    const random = Math.floor(Math.random() * FHAZ.length)
    // console.log(FHAZ[random]);
    setDisplayFHAZ(FHAZ[random])
    setDisplayNAVCAM('')
    setDisplayRHAZ('')
    setDisplayMAST('')
    setDisplayCHEM('')
  }

  function randomRHAZ () {
    const random = Math.floor(Math.random() * RHAZ.length)
    // console.log(RHAZ[random]);
    setDisplayRHAZ(RHAZ[random])
    setDisplayFHAZ('')
    setDisplayNAVCAM('')
    setDisplayMAST('')
    setDisplayCHEM('')
  }

  function randomMAST () {
    const random = Math.floor(Math.random() * MAST.length)
    // console.log(MAST[random]);
    setDisplayMAST(MAST[random])
    setDisplayFHAZ('')
    setDisplayRHAZ('')
    setDisplayNAVCAM('')
    setDisplayCHEM('')
  }

  function randomCHEM () {
    const random = Math.floor(Math.random() * CHEM.length)
    // console.log(CHEM[random]);
    setDisplayCHEM(CHEM[random])
    setDisplayFHAZ('')
    setDisplayRHAZ('')
    setDisplayMAST('')
    setDisplayNAVCAM('')
  }

  function randomNAVCAM () {
    const random = Math.floor(Math.random() * NAVCAM.length)
    // console.log(random);
    // console.log(NAVCAM[random]);
    setDisplayNAVCAM(NAVCAM[random])
    setDisplayFHAZ('')
    setDisplayRHAZ('')
    setDisplayMAST('')
    setDisplayCHEM('')
  }


  return (
    <div class='border border-sky-500 content-center flex flex-col object-contain'>
      <h2 class='text-center text-2xl subpixel-antialiased font-bold text-orange-500'>Mars Rover</h2>
      <iframe class='mt-6 object-scale-down w-auto' src='https://mars.nasa.gov/layout/embed/model/?s=6' width='800' height='450' scrolling='no' frameBorder='0' allowFullScreen></iframe>
      <button class='mt-4' onClick={randomNAVCAM}>NAVCAM</button>
      <button onClick={randomFHAZ}>FHAZ</button>
      <button onClick={randomRHAZ}>RHAZ</button>
      <button onClick={randomMAST}>MAST</button>
      <button onClick={randomCHEM}>CHEM</button>
      <p>NAVCAM: </p>
      <img src={displayNAVCAM}></img>
      <p>FHAZ: </p>
      <img src={displayFHAZ}></img>
      <p>RHAZ: </p>
      <img src={displayRHAZ}></img>
      <p>MAST: </p>
      <img src={displayMAST}></img>
      <p>CHEM: </p>
      <img src={displayCHEM}></img>
      <h2 class='mt-10'>A mars years is 687 Earth days.</h2>
      <br></br>
      <h2>For any planet, a year is the time it takes to make one orbit around the sun.</h2>
      <h2 class='mt-4'>Because Mars is farther away from the sun, it has to travel a greater distance around the sun. It takes Mars about twice as long as it does for Earth to make one circle around the sun. Therefore, a year on Mars lasts twice as long.</h2>
      <h2 class='mt-6 font-bold text-orange-600'>Martian years are represented by sol. The current sol of the Mars Rover images is sol: {sol}</h2>
      <br></br>
      <div>
        <Gallery /> 
      </div> 
    </div>
  )
}

export default Rover