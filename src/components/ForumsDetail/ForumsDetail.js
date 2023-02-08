import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card } from 'flowbite-react'
import ReactModal from 'react-modal';
import { useState } from 'react';
import axios from 'axios';

const ForumsDetail = ({forums, astro}) => {
  const {id} = useParams()
  const [show, setShow] = useState(false)
  console.log(forums, astro);

  const findForum = forums && forums.find((forum) => forum.id === parseInt(id))
  console.log(findForum);
  const [postUpdate, SetPostUpdate] = useState({
    astronaut_id: findForum.astronaut_id,
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
}



  return (
    <div class='flex-col items-center justify-center content-center'>
      <div class='w-96 self-center justify-center items-center flex'>
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-black">
              {findForum.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {findForum.preview_url}
          </p>
          <img  class='' src={findForum.photo} alt='forum post'></img>
        </Card>
        <Button onClick={showModal}>
          Update Forum Post
        </Button>
      </ div >
      <div>
        <ReactModal isOpen={show}>
          <h1>Update Forum Post</h1>
          <Button onClick={hideModal}>X</Button>
          <Button onClick={updateStack}>Update</Button>
          <Button onClick={deleteForumPost} color='failure'>Delete</Button>
          <div>
            <input type='text' value={postUpdate.title} onChange={(e) => SetPostUpdate({...postUpdate, title: e.target.value})}></input>
            <input type='text' value={postUpdate.photo} onChange={(e) => SetPostUpdate({...postUpdate, photo: e.target.value})}></input>
            <input type='text' value={postUpdate.preview_url} onChange={(e) => SetPostUpdate({...postUpdate, preview_url: e.target.value})}></input>
          </div>
        </ReactModal>
      </div>
    </div>
  )
}

export default ForumsDetail