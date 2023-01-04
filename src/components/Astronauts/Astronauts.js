import React from 'react'
import { Link } from 'react-router-dom';

const Astronauts = ({astro}) => {
  console.log(astro);




  return (

    <div>
        <h2>Astronauts</h2>
        <Link to='/astronauts/create/'>Add Astronaut!</Link>
    </div>
  )
}

export default Astronauts