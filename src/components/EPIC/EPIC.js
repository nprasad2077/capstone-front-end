import React from 'react'
import { useState } from 'react';
import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// import './EPIC.css'

const EPIC = ({epic}) => {
  const [counter, setCounter] = useState(0)

  console.log(epic);

  const epicMapped = epic && epic.map((images) => images.image)
  const epicMappedDate = epic && epic.map((images) => 'https://epic.gsfc.nasa.gov/archive/natural/2023/01/02/png/'+ images.image + '.png')

  console.log(epicMappedDate);
  // console.log();

  function counterSetUP () {
    if (counter === (epicMappedDate.length - 1)) {
      setCounter(0)
    } else {
      setCounter(counter + 1)
    }
    // console.log(counter);
  }

  function down () {
    if (counter === 0) {
      setCounter((epicMappedDate.length - 1))
    } else {
      setCounter(counter - 1)
    }
    // console.log(counter);
  }

  return (
    <div class='border-4 border-slate-900 object-contain content-center text-center'>
      <h2>EPIC</h2>
      <img src={epicMappedDate[counter]}></img>
      <button onClick={down}>PREV</button>
      <button onClick={counterSetUP}>NEXT</button>
      <h2>This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</h2>
    </div>
  )
}

export default EPIC