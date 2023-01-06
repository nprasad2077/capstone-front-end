import React from 'react'
import { Card } from 'flowbite-react';

const Forums = ({forums, astro}) => {

  console.log(forums, astro);

  const forumsMap = forums.map((map) => <div class='w-96'>
  <Card>
    <h5 className="text-2xl font-bold tracking-tight text-black">
        {map.title}
    </h5>
    <img  class='' src={map.photo} alt='forum post'></img>
    <p className="font-normal text-center text-slate-800">
      {map.preview_url}
    </p>
  </Card>
</ div >)



  return (
    <div>
      {forumsMap}
    </div>
  )
}

export default Forums