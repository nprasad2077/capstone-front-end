import React from 'react'
import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Forums = ({forums, astro}) => {

  console.log(forums, astro);

  const forumsMap = forums.map((map) => <Link to={'/forums/' + map.id}><div class='w-96'>
  <Card>
    <h5 className="text-2xl font-bold tracking-tight text-black">
        {map.title}
    </h5>
  </Card>
</ div ></Link>)

  const createPost = () => {
    console.log('create post');
  }



  return (
    <div class='flex-col items-center justify-center'>
      <div class='flex items-center justify-center'>{forumsMap}</div>
      <div class='flex items-center justify-center'>
        <Button color="success" onClick={createPost}>
          Create Forum Post
        </Button>
      </div>
    </div>
  )
}

export default Forums