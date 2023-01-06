import React from 'react'
import './SlideShow.css'
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://epic.gsfc.nasa.gov/archive/natural/2022/12/25/png/epic_1b_20221225010437.png',
    thumbnail: 'https://epic.gsfc.nasa.gov/archive/natural/2022/12/25/png/epic_1b_20221225010437.png',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const SlideShow = ({epic, date}) => {
  const slideshowEpic = epic && epic.map((images) => `https://epic.gsfc.nasa.gov/archive/natural/${date}/png/`+ images.image + '.png')
  const slideshowEpicJpg = epic && epic.map((images) => 'https://epic.gsfc.nasa.gov/archive/natural/2022/12/25/jpg/'+ images.image + '.jpg')
  const imagesARR = []

  const imagesCreate = epic && slideshowEpic.map((images) => imagesARR.push({original: images, thumbnail: images}))

  // console.log(slideshowEpicJpg)
  // console.log(imagesARR)
  // console.log(images);


  return (
    <div class='ml-5 mb-2 mt-2 border-4 border-slate-900 p-5 content-center text-center'>
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