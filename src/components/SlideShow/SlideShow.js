import React from 'react'
import './SlideShow.css'
import ImageGallery from 'react-image-gallery';


const SlideShow = ({epic, date}) => {

  const slideshowEpic = epic && epic.map((images) => `https://epic.gsfc.nasa.gov/archive/natural/${date}/png/`+ images.image + '.png')
  const slideshowEpicJpg = epic && epic.map((images) => 'https://epic.gsfc.nasa.gov/archive/natural/2022/12/25/jpg/'+ images.image + '.jpg')
  const imagesARR = []

  const imagesCreate = epic && slideshowEpic.map((images) => imagesARR.push({original: images, thumbnail: images}))



  return (
    <div class='mx-5 mb-2 mt-12 border-2 border-slate-300 p-5 content-center text-center bg-slate-800'>
      <h2 class='text-center text-2xl subpixel-antialiased font-bold'>Earth Polychromatic Imaging Camera {'(EPIC)'}</h2>
      <div class='mt-4'>
        <ImageGallery items={imagesARR} />
      </div>
      <p>This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</p>
      <br></br>
      <p>The most recent images are from: {date}</p>
    </div>
  )
}

export default SlideShow