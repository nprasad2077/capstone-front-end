/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react'
import { Button } from 'flowbite-react';
import './rover.css'


//Components
import Accord from '../Accord/Accord'

const Rover = ({rover, roverDate, sol}) => {
  const FHAZ = []     // arrays created to store images of different Mars rover cameras.
  const RHAZ = []
  const MAST = []
  const CHEM = []
  const NAVCAM = []
  const idFHAZ = []   // arrays created to store rover ids for images.
  const idRHAZ = []
  const idMAST = []
  const idCHEM = []
  const idNAVCAM = []
  const dateFHAZ = []   // arrays created to store dates of images taken.
  const dateRHAZ = []
  const dateMAST = []
  const dateCHEM = []
  const dateNAVCAM = []
  const [displayFHAZ, setDisplayFHAZ] = useState('')    // variables to store image source data for respective camera positions.
  const [displayRHAZ, setDisplayRHAZ] = useState('')
  const [displayMAST, setDisplayMAST] = useState('')
  const [displayCHEM, setDisplayCHEM] = useState('')
  const [displayNAVCAM, setDisplayNAVCAM] = useState('')
  const solDate = sol.toString()


  function parseRovers(rov) {           // This function parses through the entire rover dataset and sorts the image, rover ID, and date taken into their respective datasets according to camera position.
    if (rov.camera.name === 'FHAZ') {   // Sorts into the front hazard avoidance system camera dataset.
      FHAZ.push(rov.img_src)
      idFHAZ.push(rov.id)
      dateFHAZ.push(rov.earth_date)
    }
    if (rov.camera.name === 'RHAZ') { // Sorts into the rear hazard avoidance system camera dataset.
      RHAZ.push(rov.img_src)
      idRHAZ.push(rov.id)
      dateRHAZ.push(rov.earth_date)
    }
    if (rov.camera.name === 'MAST') { // Sorts into the mast camera dataset.
      MAST.push(rov.img_src)
      idMAST.push(rov.id)
      dateMAST.push(rov.earth_date)
    }
    if (rov.camera.name === 'CHEMCAM') { // Sorts into the chemical camera (CHEMCAM) dataset.
      CHEM.push(rov.img_src)
      idCHEM.push(rov.id)
      dateCHEM.push(rov.earth_date)
    }
    if (rov.camera.name === 'NAVCAM') { // Sorts into the front hazard avoidance system camera dataset.
      NAVCAM.push(rov.img_src)
      idNAVCAM.push(rov.id)
      dateNAVCAM.push(rov.earth_date)
    }
  }

  function randomFHAZ () {      // When the FHAZ button is clicked, a random image from the FHAZ camera dataset is displayed to the user.
    const random = Math.floor(Math.random() * FHAZ.length)  // calculates a random array position from the total length of images in the dataset.
    setDisplayFHAZ(FHAZ[random])  // set image element in document to the randomized rover image and displays to user.
    setDisplayNAVCAM('') // sets rest of the images to blank so that only the FHAZ image is displayed to the user.
    setDisplayRHAZ('')
    setDisplayMAST('')
    setDisplayCHEM('')
  }

  function randomRHAZ () {    // When the RHAZ button is clicked, a random image from the RHAZ camera dataset is displayed to the user.
    const random = Math.floor(Math.random() * RHAZ.length)
    setDisplayRHAZ(RHAZ[random])
    setDisplayFHAZ('')
    setDisplayNAVCAM('')
    setDisplayMAST('')
    setDisplayCHEM('')
  }

  function randomMAST () {    // When the MAST button is clicked, a random image from the mast camera dataset is displayed to the user.
    const random = Math.floor(Math.random() * MAST.length)
    setDisplayMAST(MAST[random])
    setDisplayFHAZ('')
    setDisplayRHAZ('')
    setDisplayNAVCAM('')
    setDisplayCHEM('')
  }

  function randomCHEM () {    // When the CHEM button is clicked, a random image from the chem camera dataset is displayed to the user.
    const random = Math.floor(Math.random() * CHEM.length)
    setDisplayCHEM(CHEM[random])
    setDisplayFHAZ('')
    setDisplayRHAZ('')
    setDisplayMAST('')
    setDisplayNAVCAM('')
  }

  function randomNAVCAM () {    // When the NAVCAM button is clicked, a random image from the navigation camera dataset is displayed to the user.
    const random = Math.floor(Math.random() * NAVCAM.length)
    setDisplayNAVCAM(NAVCAM[random])
    setDisplayFHAZ('')
    setDisplayRHAZ('')
    setDisplayMAST('')
    setDisplayCHEM('')
  }


  return (
    <div class='border-2 border-slate-300 content-center flex flex-col object-contain p-5 mx-5 mt-5 bg-slate-800'>
      <h2 class='text-center text-2xl subpixel-antialiased font-bold text-orange-500'>Mars Rover</h2>
      <iframe title='Perseverance Rover 3D model' class='mt-6 object-scale-down w-auto' src='https://mars.nasa.gov/layout/embed/model/?s=6' width='800' height='450' scrolling='no' frameBorder='0' allowFullScreen></iframe>
      <div class='mt-10 w-auto text-center justify-center flex'>
        <Button className='wide-button color'  onClick={randomNAVCAM}>NAVCAM</Button>
        <Button className='wide-button color-2' onClick={randomFHAZ}>FHAZ</Button>
        <Button  className='wide-button color'  onClick={randomRHAZ}>RHAZ</Button>
        <Button  className='wide-button color-2' onClick={randomMAST}>MAST</Button>
        <Button className='wide-button color' onClick={randomCHEM}>CHEM</Button>
      </div>
      <p class='mt-5'></p>
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