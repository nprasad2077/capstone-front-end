import React, { useState } from 'react'
import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Forums = ({forums, astro}) => {
  const [forumData, setForumData] = useState({
    astronaut_id: 1,
    title: 'Test Forum from React State',
    photo: 'https://www.nasa.gov/sites/default/files/thumbnails/image/iss042e012000.jpg',
    preview_url: 'testing'
  })
  const postURL = 'https://polar-everglades-56224.herokuapp.com/forums/'

  console.log(forums, astro);
  console.log(forumData);

  const forumsMap = forums && forums.map((map) => <Link to={'/forums/' + map.id}><div class='w-96'>
  <Card>
    <h5 className="text-2xl font-bold tracking-tight text-black">
        {map.title}
    </h5>
  </Card>
</ div ></Link>)

  const createPost = async () => {
    const response = await axios.post(postURL, forumData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
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