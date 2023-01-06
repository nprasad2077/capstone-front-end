import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'flowbite-react'

const ForumsDetail = ({forums, astro}) => {

  const {id} = useParams()
  console.log(id);

  console.log(forums, astro);

  const forumsMapDetail = forums.map((map) => <div class='w-96 self-center'>
  <Card>
    <h5 className="text-2xl font-bold tracking-tight text-black">
        {map.title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {/* {map} */}
    </p>
    <img  class='' src={map.photo} alt='forum post'></img>
  </Card>
</ div >)

const commentsMap = forums.map((map) => <div class='w-96 mt-6'><Card>
<p className="font-normal text-gray-400">{map.preview_url}</p>
</Card></div>)




  return (
    <div class='flex-col items-center justify-center'>
      <div class='flex items-center justify-center'>
        {forumsMapDetail}
      </div>
      <div class='flex items-center justify-center'>
        {commentsMap}
      </div>
    </div>
  )
}

export default ForumsDetail