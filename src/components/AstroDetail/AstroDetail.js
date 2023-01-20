import React from 'react'
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import { Button } from 'flowbite-react';
import axios from 'axios';
import { useEffect } from 'react';

const AstroDetail = ({astro}) => {
  const {id} = useParams()
  const astronaut = astro.find(element => element.id == id)
  const planets = astronaut.planets.map(planet => <p> {planet} </p>)

  const updateInfo = () => {
    axios.put(`https://polar-everglades-56224.herokuapp.com/astronauts/${id}`, {
      name: 'New Name',
      favorite_url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/iss056e001001.jpg',
      photo_url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/iss056e001001.jpg',
      planets: ['Mars', 'Venus', 'Jupiter']
    })
  }


  return (
    <div class='flex-col items-center justify-center'>
    <h1 class='text-4xl font-bold text-center text-white mb-4'>Astronaut Details</h1>
    <div class='flex items-center justify-center'>
      <a class="flex flex-col items-center bg-gray-800 border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-700 border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={astronaut.photo_url} alt=""/>
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{astronaut.name}</h5>
              <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">Here are the biggest space destinations this year: {planets}</p>
          </div>
      </a>
    </div>

    <div>
      <Button onClick={updateInfo}>Update information</Button>
    </div>

    <ReactModal isOpen={true} />
    
    </div>
  )
}

export default AstroDetail