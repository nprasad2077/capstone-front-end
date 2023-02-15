import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card } from 'flowbite-react'
import ReactModal from 'react-modal';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ForumsDetail = ({forums, astro}) => {
  const {id} = useParams()
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const findForum = forums && forums.find((forum) => forum.id === parseInt(id))

  const [postUpdate, SetPostUpdate] = useState({
    astronaut_id: findForum.astronaut_id && findForum.astronaut_id.toString(),
    title: findForum.title,
    photo: findForum.photo,
    preview_url: findForum.preview_url
  })

  const forumsMapDetail = forums && forums.map((map) => <div class='w-96 self-center'>
  <Card>
    <h5 className="text-2xl font-bold tracking-tight text-black">
        {map.title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    </p>
    <img  class='' src={map.photo} alt='forum post'></img>
  </Card>
</ div >)

const commentsMap = forums && forums.map((map) => <div class='w-96 mt-6'><Card>
<p className="font-normal text-gray-400">{map.preview_url}</p>
</Card></div>)

const updateForumPost = () => {
  const response = axios.put('https://polar-everglades-56224.herokuapp.com/forums/' + findForum.id, postUpdate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
}

const deleteForumPost = () => {
  const response = axios.delete('https://polar-everglades-56224.herokuapp.com/forums/' + findForum.id)
  .then((response) => {
    console.log(response);
    if (response.status === 204){alert('Forum Post Deleted')} 
  })
}

const showModal = () => { setShow(true) }
const hideModal = () => { setShow(false) }

const updateStack = () => {
  updateForumPost()
  hideModal()
  setTimeout(() => window.location.reload(), 300)
}

const deleteStack = () => {
  deleteForumPost()
  navigate(-1)
  setTimeout(() => window.location.reload(), 500)
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
};

  return (
    <div class='flex flex-col items-center justify-center content-center mt-10'>
      <div class='w-96 self-center justify-center items-center flex flex-col'>
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-black">
              {findForum.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {findForum.preview_url}
          </p>
          <img  class='' src={findForum.photo} alt='forum post'></img>
        </Card>
        <div class='mt-10'>
          <Button onClick={showModal}>
            Update Forum Post
          </Button>
        </div>
      </ div >
      <div class=''>
        <ReactModal isOpen={show} style={customStyles}>
          <h1 class='font-semibold text-white text-center mb-4'>Update Forum Post</h1>
          <div class='flex flex-col justify-center items-center'>
            <input type='text' value={postUpdate.title} onChange={(e) => SetPostUpdate({...postUpdate, title: e.target.value})}></input>
            <input type='text' value={postUpdate.photo} onChange={(e) => SetPostUpdate({...postUpdate, photo: e.target.value})}></input>
            <input type='text' value={postUpdate.preview_url} onChange={(e) => SetPostUpdate({...postUpdate, preview_url: e.target.value})}></input>
            <div class='mt-6'>
              <Button onClick={updateStack}>Update</Button>
            </div>
            <div class='mt-2'>
              <Button onClick={deleteStack} color='failure'>Delete</Button>
            </div>
            <div class='mt-2'>
              <Button color='failure' onClick={hideModal}>X</Button>
            </div>
          </div>
        </ReactModal>
      </div>
    </div>
  )
}

export default ForumsDetail