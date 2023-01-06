import React from 'react'
import { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { Button } from 'flowbite-react';


//Components
import Accord from '../Accord/Accord'

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
    setDisplayCHEM(CHEM[random])
    setDisplayFHAZ('')
    setDisplayRHAZ('')
    setDisplayMAST('')
    setDisplayNAVCAM('')
  }

  function randomNAVCAM () {
    const random = Math.floor(Math.random() * NAVCAM.length)
    setDisplayNAVCAM(NAVCAM[random])
    setDisplayFHAZ('')
    setDisplayRHAZ('')
    setDisplayMAST('')
    setDisplayCHEM('')
  }

  const NAVCAMimg = NAVCAM.map((map) =>  ({original: map, thumbnail: map}))
  const CHEMimg = CHEM.map((chem) => ({original: chem, thumbnail: chem}))

  return (
    <div class='border-4 border-slate-900 content-center flex flex-col object-contain p-5 mx-5 mt-2'>
      <h2 class='text-center text-2xl subpixel-antialiased font-bold text-orange-500'>Mars Rover</h2>
      <iframe class='mt-6 object-scale-down w-auto' src='https://mars.nasa.gov/layout/embed/model/?s=6' width='800' height='450' scrolling='no' frameBorder='0' allowFullScreen></iframe>
      <Button color='dark' onClick={randomNAVCAM}>NAVCAM</Button>
      <Button color='dark' onClick={randomFHAZ}>FHAZ</Button>
      <Button  color='dark' onClick={randomRHAZ}>RHAZ</Button>
      <Button  color='dark' onClick={randomMAST}>MAST</Button>
      <Button color='dark' onClick={randomCHEM}>CHEM</Button>
      <p class=''></p>
      <img src={displayNAVCAM}></img>
      <p></p>
      <img src={displayFHAZ}></img>
      <p></p>
      <img src={displayRHAZ}></img>
      <p></p>
      <img src={displayMAST}></img>
      <p></p>
      <img src={displayCHEM}></img>
      <div>
  </div>
      <div class='mt-6'>
        <Accord />
      </div>
    </div>
  )
}

export default Rover