import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card } from 'flowbite-react';


const Astronauts = ({astro}) => {
  console.log(astro);

  const astroMapped = astro.map(astro =>         <Link to={'/astronauts/' + astro.id}><div className="max-w-sm m-6">
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
</div></Link>)



  return (
    <div class='flex-col text-center'>
        <h2>Astronauts</h2>
        <div class='flex'>
          {astroMapped}
        </div>
        <Link to='/astronauts/create/'><Button color='success'>Create Astronaut</Button></Link>
    </div>
  )
}

export default Astronauts