import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'

const MediaPlayer = ({search}) => {
  const {index} = useParams()
  const [content, setContent] = useState([])
  const [showImage, setShowImage] = useState('')
  const [showVideo, setShowVideo] = useState(null)
  const collectionURL = search.collection.items[index].href
  const mediaType = search.collection.items[index].data[0].media_type
  const test = <source src={showVideo && showVideo} type="video/mp4"/>
  const [video, setVideo] = useState(null)

  // console.log(index, collectionURL);
  console.log(mediaType);

  const getContent = async () => {
    const response = await axios({
      method: 'get',
      url: collectionURL
    })
    .then(res => setContent(res.data[0]))
    .catch(err => console.log(err))
  }


  const displayMedia = () => {
    if (mediaType === 'video') {
      setShowVideo(content)
      console.log('video set');
    }
    if (mediaType === 'image') {
      setShowImage(content)
    }
  }

  useEffect(() => {
    getContent()
    displayMedia()

  }, [content])

console.log(content);
console.log(showImage);
console.log(showVideo);

function setTest() {
  setVideo(        <video controls autoPlay muted width="100%">
  <source src={showVideo && showVideo} type="video/mp4"/>
  Sorry, your browser doesn't support videos.
</video>)
  console.log('video set!');
}

// setTimeout(setTest, 1000)

  return (
    <div class='text-center mt-4'>
      <h2 class='text-4xl'>Media Player</h2>

      <div class=''>
        <img class='w-full' src={showImage && showImage}  alt='display from NASA img and Video Library'></img>
        {video}
      </div>
      <button onClick={setTest}>Play Video</button>

    </div>
  )
}

export default MediaPlayer