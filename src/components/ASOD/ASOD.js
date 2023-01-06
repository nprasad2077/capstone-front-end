import React from 'react'

const ASOD = ({asod}) => {

  return (
    <div class='mt-2 border-4 border-slate-900 content-center flex-col p-5 mr-5 '>
      <h2 class='text-center text-sm'>Astronomy Picture of the Day</h2>
      <h3 class='text-center text-2xl subpixel-antialiased font-bold'>{asod.title}</h3>
      <img src={asod.hdurl} class='self-center mt-6'></img>
      <p class='mt-2'>Description: {asod.explanation}</p>
    </div>
  )
}

export default ASOD