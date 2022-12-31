import React from 'react'
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
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

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=1&api_key=DEMO_KEY'

const Perseverance = ({persRover}) => {
  console.log(persRover.photos);
  const navcamLeft = []
  const navcamLeftDate = []
  const mastZoomRight = []
  const mastZoomRightDate = []
  const mastZoomLeft = []
  const mastZoomLeftDate = []
  const skycam = []
  const skycamDate = []

  function parsePersRover(rov) {
    if (rov.camera.name === 'NAVCAM_LEFT') {
      navcamLeft.push(rov.img_src)
      navcamLeftDate.push(rov.earth_date)
    }
    if (rov.camera.name === 'MCZ_RIGHT') {
      mastZoomRight.push(rov.img_src)
      mastZoomRightDate.push(rov.earth_date)
    }
    if (rov.camera.name === 'MCZ_LEFT') {
      mastZoomLeft.push(rov.img_src)
      mastZoomLeftDate.push(rov.earth_date)
    }
    if (rov.camera.name === 'SKYCAM') {
      skycam.push(rov.img_src)
      skycamDate.push(rov.earth_date)
    }


  }

  const persRoverMapped = persRover.photos && persRover.photos.map((rover) => parsePersRover(rover))

  console.log(persRoverMapped);
  console.log(skycam, mastZoomRightDate);




  return (
    <div>
      <ImageGallery items={images} />
      <ImageGallery items={images} />
      <ImageGallery items={images} />
      <ImageGallery items={images} />
    </div>
  )
}

export default Perseverance