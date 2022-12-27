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

const SlideShow = ({epic}) => {
  const slideshowEpic = epic && epic.map((images) => 'https://epic.gsfc.nasa.gov/archive/natural/2022/12/25/png/'+ images.image + '.png')
  const slideshowEpicJpg = epic && epic.map((images) => 'https://epic.gsfc.nasa.gov/archive/natural/2022/12/25/jpg/'+ images.image + '.jpg')
  const imagesARR = []

  const imagesCreate = epic && slideshowEpic.map((images) => imagesARR.push({original: images, thumbnail: images}))

  console.log(slideshowEpicJpg)
  console.log(imagesARR)
  // console.log(images);




  return (
    <div class='border border-sky-500 content-center'>
      <ImageGallery items={imagesARR} />
    </div>
  )
}

export default SlideShow