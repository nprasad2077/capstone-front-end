import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Image = ({search, searchMapped, setMediaInput}) => {


  const handleInput = (e) => {
    console.log(e.target.value)
    setMediaInput(e.target.value)
  }




  return (
    <div class='border border-sky-500 text-center flex-col'>

      <h2 class='text-center text-2xl subpixel-antialiased font-bold'>NASA Image and Video Library</h2>
      <input class='text-black' onChange={handleInput}></input>


      <div class='flex-col mt-10'>
        {search.collection && searchMapped}
      </div>

    </div>
  )
}

export default Image