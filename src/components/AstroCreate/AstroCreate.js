import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'


const {name, favorite_planet, photo_url} = ''
const planets = []


const AstroCreate = () => {

const navigate = useNavigate()

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
  // navigate(-1)
}

console.log(astroForm);

return (
  <div>
      <h2>Add an Astronaut to the Base!</h2>

      <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Astronaut Name</label>
      <div class="relative mb-6">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div>
        <input onChange={handleInput} name='name' value={astroForm.name} type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
      </div>
      <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Favorite Planet</label>
      <div class="flex mb-6">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          @
        </span>
        <input onChange={handleInput} name='favorite_planet' value={astroForm.favorite_planet} type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
      </div>
      <div class="mb-6">
          <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
          <input onChange={handleInput} name='photo_url' value={astroForm.photo_url} type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div class="mb-6">
          <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Planets</label>
          <input onChange={handleInput} name='planets' value={astroForm.planets} type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <button onClick={createAstronaut}>Submit</button>
      <Button onClick={createAstronaut}>Submit</Button>
  </div>
)
}

export default AstroCreate