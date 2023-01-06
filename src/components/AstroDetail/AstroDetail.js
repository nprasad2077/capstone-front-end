import React from 'react'
import { useParams } from 'react-router-dom';

const AstroDetail = ({astro}) => {
  const {id} = useParams()
  const astronaut = astro.find(element => element.id == id)
  const planets = astronaut.planets.map(planet => <p> {planet} </p>)

  console.log(astronaut, id)
  console.log(planets);


  return (
    <div class='flex-col items-center justify-center'>
        <a class="flex flex-col items-center bg-gray-800 border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-700 border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={astronaut.photo_url} alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{astronaut.name}</h5>
                <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.{planets}</p>
            </div>
        </a>
    </div>
  )
}

export default AstroDetail