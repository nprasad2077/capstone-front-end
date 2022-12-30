import React from 'react'
import { Params, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MediaPlayer = ({search}) => {
  const {index} = useParams()
  const [content, setContent] = useState([])
  const [showImage, setShowImage] = useState('')
  const [showVideo, setShowVideo] = useState('')
  const collectionURL = search.collection.items[index].href
  const mediaType = search.collection.items[index].data[0].media_type
  const test = <video controls width='100%'><source src={showVideo}></source></video>

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
    if (mediaType == 'video') {
      setShowVideo(content)
    }
    if (mediaType == 'image') {
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


  return (
    <div class='text-center text-xl mt-6'>
      <h2>Media Player</h2>
      <img src={showImage && showImage}></img>

      <div>
        {/* {mediaType == 'video' ? test: null}  rendering issue! */}

      </div>


    </div>
  )
}

export default MediaPlayer