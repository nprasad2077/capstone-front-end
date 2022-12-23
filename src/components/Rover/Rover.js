import React from 'react'

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

  // let arrayRover = rover && rover.forEach(element => {
  //   console.log(element);
  // });

  function parseRovers(rov) {
    if (rov.camera.name == 'FHAZ') {
      console.log('we have fhaz')
      FHAZ.push(rov.img_src)
      idFHAZ.push(rov.id)
      dateFHAZ.push(rov.earth_date)
    }
    if (rov.camera.name == 'RHAZ') {
      console.log('we have rhaz')
      RHAZ.push(rov.img_src)
      idRHAZ.push(rov.id)
      dateRHAZ.push(rov.earth_date)
    }
    if (rov.camera.name == 'MAST') {
      console.log('we have mast')
      MAST.push(rov.img_src)
      idMAST.push(rov.id)
      dateMAST.push(rov.earth_date)
    }
    if (rov.camera.name == 'CHEMCAM') {
      console.log('chem')
      CHEM.push(rov.img_src)
      idCHEM.push(rov.id)
      dateCHEM.push(rov.earth_date)
    }
    if (rov.camera.name == 'NAVCAM') {
      console.log('navcam')
      NAVCAM.push(rov.img_src)
      idNAVCAM.push(rov.id)
      dateNAVCAM.push(rov.earth_date)
    }
  }

  const roverMapped = rover && roverARR.map((rovers) => parseRovers(rovers) )

  console.log(idNAVCAM);



  return (
    <div>
      <h2>Curiosity Rover</h2>

    </div>
  )
}

export default Rover