import React from 'react'
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import { Button } from 'flowbite-react';
import axios from 'axios';
import { useEffect } from 'react';
import { TextInput, Checkbox, Label } from 'flowbite-react';

const AstroDetail = ({astro}) => {
  const {id} = useParams()
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState('');
  const [favoritePlanet, setFavoritePlanet] = React.useState('');
  const [photoUrl, setPhotoUrl] = React.useState('');
  const [planetsArr, setPlanetsArr] = React.useState(['test', 'test2']);
  const astronaut = astro.find(element => element.id == id)
  const planets = astronaut.planets.map(planet => <p> {planet} </p>)

  const updateInfo = () => {
    axios.put(`https://polar-everglades-56224.herokuapp.com/astronauts/${id}`, {
      name: name,
      favorite_planet: favoritePlanet,
      photo_url: photoUrl,
      planets: planetsArr
    })
  }

  const deleteInfo = () => {
    axios.delete(`https://polar-everglades-56224.herokuapp.com/astronauts/${id}`)
  }

  const test = () => {console.log('test')}


  const showModal = () => { setShow(true) }
  const hideModal = () => { setShow(false) }

  console.log(planetsArr);


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
      <Button onClick={showModal}>Update information</Button>
    </div>
    <div>
      <Button color='failure' onClick={deleteInfo}>Delete Astronaut</Button>
    </div>

    <ReactModal isOpen={show} shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true} onRequestClose={hideModal}>
      <div class='bg-slate-700'>
        <Button onClick={hideModal}>X</Button>
        <h1 class='text-4xl font-bold text-center text-white mb-4'>Update Astronaut</h1>

        <div class='flex flex-col items-center justify-center text-slate-50 space-y-4' >
          <div class='mt-6'></div>
            <TextInput placeholder='Name' onChange={(e) => setName(e.target.value)} required={true} />
            <TextInput placeholder='Favorite Planet' onChange={(e) => setFavoritePlanet(e.target.value)}/>
            <TextInput placeholder='Photo URL' onChange={(e) => setPhotoUrl(e.target.value)} />
            {/* <TextInput placeholder='Favorite Space Objects' onChange={(e) => setPlanetsArr(e.target.value)}/> */}
            <Button onClick={updateInfo}>Update</Button>
        </div>



      </div>
    </ReactModal>
    
    </div>
  )
}

export default AstroDetail