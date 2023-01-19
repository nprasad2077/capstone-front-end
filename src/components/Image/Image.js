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
    <div class='mt-12 mx-5 border-2 border-slate-300 text-center flex-col items-center justify-center p-5 bg-slate-800'>

      <h2 class='text-center text-2xl subpixel-antialiased font-bold mb-4'>NASA Image and Video Library</h2>
      <TextInput onChange={handleInput} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Videos, Images..." required></TextInput>
      <div class='flex items-center justify-center mt-4'>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>



      <div class='flex-col mt-10'>
        {search.collection && searchMapped}
      </div>

    </div>
  )
}

export default Image