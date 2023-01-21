import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card } from 'flowbite-react';
import { useEffect } from 'react';


const Astronauts = ({astro, getAstro}) => {
  console.log(astro);

  useEffect(() => {getAstro(); console.log('get');}, [])

  const astroMapped = astro && astro.map(astro =>         <div><Link class='' to={'/astronauts/' + astro.id}><div className=" max-w-sm m-6 ">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={astro.photo_url}
    class='bg-slate-800'
  >
    <h5 className="text-2x bg-slate-800 font-bold tracking-tight text-white">
      {astro.name}
    </h5>
    <p className="font-normal bg-slate-800 text-gray-400">
      Favorite Planet: {astro.favorite_planet}
    </p>
  </Card>
</div></Link></div>)



  return (
    <div class='flex-col items-center justify-center '>
          <div class='items-center justify-center flex space-x-4 m-auto'>{astroMapped}</div>
          <div class='flex items-center justify-center'><Link class='' to='/astronauts/create/'><Button color='success'>Create Astronaut</Button></Link></div>
    </div>
  )
}

export default Astronauts