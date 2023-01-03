import axios from 'axios'
import { Button, Navbar, TextInput } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Image = ({search, searchMapped, setMediaInput, getSearch, mediaForm, setMediaForm, mediaInput}) => {




  const handleInput = (e) => {
    console.log(e.target.value)
    setMediaInput(e.target.value)
  }

  const handleSubmit = () => {
    setMediaForm(mediaInput)
    getSearch()
  }




  return (
    <div class='border border-sky-500 text-center flex-col'>

      <h2 class='text-center text-2xl subpixel-antialiased font-bold'>NASA Image and Video Library</h2>
      {/* <input class='text-black' onChange={handleInput}></input> */}
      <TextInput onChange={handleInput}></TextInput>
      <Button onClick={handleSubmit}>Submit</Button>


      <div class='flex-col mt-10'>
        {search.collection && searchMapped}
      </div>

    </div>
  )
}

export default Image