import React from 'react'
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Forums = ({forums, astro}) => {

  console.log(forums, astro);

  const forumsMap = forums.map((map) => <Link to={'/forums/' + map.id}><div class='w-96'>
  <Card>
    <h5 className="text-2xl font-bold tracking-tight text-black">
        {map.title}
    </h5>
    <img  class='' src={map.photo} alt='forum post'></img>
  </Card>
</ div ></Link>)



  return (
    <div>
      {forumsMap}
    </div>
  )
}

export default Forums