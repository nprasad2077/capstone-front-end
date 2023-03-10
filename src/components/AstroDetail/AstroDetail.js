import React from 'react'
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import { Button } from 'flowbite-react';
import axios from 'axios';
import { TextInput, Checkbox, Label } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const AstroDetail = ({astro}) => {
  const {id} = useParams()
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState('');
  const [favoritePlanet, setFavoritePlanet] = React.useState('');
  const [photoUrl, setPhotoUrl] = React.useState('');
  const [planetsArr, setPlanetsArr] = React.useState(['test', 'test2']);
  const astronaut = astro && astro.find(element => element.id == id)
  const planets = astro && astronaut.planets.map(planet => <li> {planet} </li>)

  const goBack = () => {navigate(-1)}

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
    goBack()
    setTimeout(() => {window.location.reload()}, 300)
  }

  const test = () => {console.log('test')}


  const showModal = () => { setShow(true) }
  const hideModal = () => { setShow(false) }

  console.log(astronaut);

  const updateStack = () => {
    updateInfo()
    hideModal()
    setTimeout(() => {window.location.reload()}, 1000)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1e293b',
      border: '4px white solid',
    },
    // overlay: {
    //   backgroundColor: 'black',
    // },
  };



  return (
    <div class='flex-col items-center justify-center'>
    <h1 class='text-4xl font-bold text-center text-white mb-10 mt-2'>Astronaut Details</h1>
    <div class='flex items-center justify-center p-6'>
      <div class="flex flex-col items-center bg-gray-800 border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-700 border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ml-4 p-1/2" src={astronaut.photo_url} alt=""/>
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class=" text-2xl font-bold tracking-tight text-white dark:text-white mb-6">{astronaut.name}</h5>
              <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">Here are the biggest space destinations this year: <div class='mt-4 ml-6'>{planets}</div></p>
          </div>
      </div>
    </div>
    <div class='flex flex-col items-center justify-center mt-40'>
      <div>
        <Button onClick={showModal}>Update information</Button>
      </div>
      <div class='mt-4'>
        <Button color='failure' onClick={deleteInfo}>Delete Astronaut</Button>
      </div>
    </div>
    <div class='bg-slate-900 w-1/2'>
      <ReactModal isOpen={show} shouldCloseOnOverlayClick={true} shouldCloseOnEsc={true} onRequestClose={hideModal} style={customStyles} class='bg-slate-800'>
        <div class='bg-slate-800'>
          <h1 class='text-4xl font-bold text-center text-white mb-4'>Update Astronaut</h1>

          <div class='flex flex-col items-center justify-center text-slate-50 space-y-4' >
            <div class='mt-6'></div>
            <label for="default-input" class="block mb-2 text-sm font-medium  dark:text-white">Name</label>
              <TextInput placeholder= {astronaut.name} onChange={(e) => setName(e.target.value)} required={true}/>
              <label for="default-input" class="block mb-2 text-sm font-medium  dark:text-white">Favorite Planet</label>
              <TextInput placeholder={astronaut.favorite_planet} onChange={(e) => setFavoritePlanet(e.target.value)}/>
              <label for="default-input" class="block mb-2 text-sm font-medium  dark:text-white">Photo URL</label>
              <TextInput placeholder='Photo URL'  onChange={(e) => setPhotoUrl(e.target.value)} />
              {/* <TextInput placeholder='Favorite Space Objects' onChange={(e) => setPlanetsArr(e.target.value)}/> */}
              <Button onClick={updateStack}>Update</Button>
              <Button color='failure' onClick={hideModal}>X</Button>
          </div>
        </div>
      </ReactModal>
    </div>
    
    </div>
  )
}

export default AstroDetail