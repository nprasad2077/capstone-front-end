import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'


const {name, favorite_planet, photo_url} = ''


const AstroCreate = () => {

const navigate = useNavigate()

const goBack = () => {
  navigate(-1)
}

const [astroForm, setAstroForm] = useState({
  name: name,
  favorite_planet: favorite_planet,
  photo_url: photo_url,
  planets: [],
})

const handleInput = (e) => {
  const target = e.target
  const value = e.target.value
  const name = target.name

  if (target.name === 'planets') {
    let planetsArr = value.split(',')
    setAstroForm({...astroForm, [name]: planetsArr})
  } else {
    setAstroForm({
      ...astroForm,[name]: value
    })
  }
}

const createAstronaut = async () => {
  try {
    const newCreated = await axios.post('https://polar-everglades-56224.herokuapp.com/astronauts/', astroForm)
    if (newCreated) {
      console.log(newCreated);
    }
  }
  catch(err) {
    console.log(err)
  }
}

const createStack = () => {
  createAstronaut()
  goBack()
}


return (
  <div class='flex-col items-center justify-center w-full text-center'>
      <div class=' flex flex-col items-center justify-center w-full'>
        <h2 class='font-bold text-3xl mt-4'>Add an Astronaut to the Base!</h2>
        <label for="input-group-1" class="block mb-2 text-sm font-medium  dark:text-white mt-10">Astronaut Name</label>
        <div class="flex mb-6 w-1/3">
          <input onChange={handleInput} name='name' value={astroForm.name} type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Name" />
        </div>
        <label for="website-admin" class="block mb-2 text-sm font-medium  dark:text-white">Favorite Planet</label>
        <div class="flex mb-6 w-1/3">
          <input onChange={handleInput} name='favorite_planet' value={astroForm.favorite_planet} type="text" id="website-admin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Earth" />
        </div>
        <div class="mb-6 w-1/3">
            <label for="default-input" class="block mb-2 text-sm font-medium  dark:text-white">Photo URL</label>
            <input onChange={handleInput} name='photo_url' value={astroForm.photo_url} type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Image URL for profile picture' />
        </div>
        <div class="mb-6 w-1/3">
            <label for="default-input" class="block mb-2 text-sm font-medium  dark:text-white">Favorite Space Elements</label>
            <input onChange={handleInput} name='planets' value={astroForm.planets} type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Other favorite space objects like stars, planets, satellites, galaxies, etc...'/>
        </div>
        <div class='flex items-center justify-center'>
          <Button onClick={createStack}>Submit</Button>
        </div>
      </div>
  </div>
)
}

export default AstroCreate