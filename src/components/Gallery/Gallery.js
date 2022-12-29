import React from 'react'
import { CarouselProps, Carousel } from 'flowbite-react'

const Gallery = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slide={false}>
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        alt="..."
      />
      <img
        src="https://www.nasa.gov/sites/default/files/jupiter_1_0.jpg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      />
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      />
      <img
        src="https://starwalk.space/gallery/images/saturn-planet-guide/1920x1080.jpg"
        alt="..."
      />
      <img
        src="https://i.natgeofe.com/n/93bbb940-db92-4285-abf7-1ba76e8a51c5/1114.jpg"
        alt="..."
      />
    </Carousel>
  </div>)
}

export default Gallery