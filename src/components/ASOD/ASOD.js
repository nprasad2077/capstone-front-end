import React from 'react'

const ASOD = ({asod}) => {
  
  return (
    <div class='border border-sky-500 content-center flex flex-col'>
      <h2 class='text-center text-lg'>Astronomy Picture of the Day</h2>
      <h3 class='text-center text-2xl subpixel-antialiased font-bold'>{asod.title}</h3>
      <img src={asod.hdurl} class='self-center'></img>
      <p>Description: {asod.explanation}</p>
    </div>
  )
}

export default ASOD