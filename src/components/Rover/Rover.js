import React from 'react'
import { useState } from 'react'

const Rover = ({rover}) => {
  // console.log(rover && rover.photos[0].camera.name);
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
 

  // let arrayRover = rover && rover.forEach(element => {
  //   console.log(element);
  // });

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
    console.log(FHAZ[random]);
    setDisplayFHAZ(FHAZ[random])
  }






  return (
    <div class='border border-sky-500 content-center flex flex-col'>
      <h2 class='text-center text-2xl subpixel-antialiased font-bold'>Curiosity Rover</h2>
      <button onClick={randomFHAZ}>FHAZ</button>
      <p>FHAZ: </p>
      <img src={displayFHAZ}></img>


    </div>
  )
}

export default Rover