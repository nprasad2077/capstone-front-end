import React, { useState } from 'react'
import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactModal from 'react-modal';

const Forums = ({forums, astro}) => {
  const [forumData, setForumData] = useState({
    astronaut_id: 1,
    title: 'Test Forum from React State',
    photo: 'https://www.nasa.gov/sites/default/files/thumbnails/image/iss042e012000.jpg',
    preview_url: 'testing'
  })
  const postURL = 'https://polar-everglades-56224.herokuapp.com/forums/'
  const [show, setShow] = useState(false)

  console.log(forums, astro);
  console.log(forumData);

  const forumsMap = forums && forums.map((map) => <Link to={'/forums/' + map.id}><div class='w-96 mt-2'>
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

  const showModal = () => { setShow(true) }
  const hideModal = () => { setShow(false) }

  const createStack = () => {
    createPost()
    hideModal()
    window.location.reload()
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
      <div class='flex flex-col items-center justify-center gap-x-2px'>{forumsMap}</div>
      <div class='flex items-center justify-center mt-10'>
        <Button color="success" onClick={showModal}>
          Create Forum Post
        </Button>
      </div>
      <div>
        <ReactModal isOpen={show} style={customStyles}>
          <div class='flex flex-col items-center justify-center mt-1'>
            <p class='text-white text-lg font-semibold mb-4'>Create a Forum Post</p>
            <div class='flex items-center justify-center'>
              <input type='text' placeholder='Title' onChange={(e) => setForumData({...forumData, title: e.target.value})}></input>
            </div>
            <div class='flex items-center justify-center mt-1'>
              <input type='text' placeholder='Photo URL' onChange={(e) => setForumData({...forumData, photo: e.target.value})}></input>
            </div>
            <div class='flex items-center justify-center mt-1'>
              <input type='text' placeholder='Preview URL' onChange={(e) => setForumData({...forumData, preview_url: e.target.value})}></input>
            </div>
            <div class='flex flex-col items-center justify-center mt-6'>
              <Button color="success" onClick={createStack}>
                Create Forum Post
              </Button>
              <div class='mt-2'>
                <Button color="failure" onClick={hideModal}> X </Button>
              </div>
            </div>
          </div>

        </ReactModal>
      </div>
    </div>
  )
}

export default Forums