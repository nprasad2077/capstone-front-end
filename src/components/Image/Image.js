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

      <h2 class='text-center text-2xl subpixel-antialiased font-bold mb-4'>NASA Image and Video Library</h2>
      {/* <input class='text-black' onChange={handleInput}></input> */}
      <TextInput onChange={handleInput} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Videos, Images..." required></TextInput>
      <Button onClick={handleSubmit}>Submit</Button>

{/* 
      <form>   
          <label for="default-search" class="mb-2 text-sm font-medium sr-only text-white">Search</label>
          <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <TextInput onChange={handleInput} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Videos, Images..." required />
              <Button onClick={handleSubmit} class="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Search</Button>
          </div>
      </form> */}



      <div class='flex-col mt-10'>
        {search.collection && searchMapped}
      </div>

    </div>
  )
}

export default Image