import React from 'react'

const EPIC = ({epic}) => {

  console.log(epic);

  const epicMapped = epic && epic.map((images) => images.image)
  const epicMappedDate = epic && epic.map((images) => 'https://epic.gsfc.nasa.gov/archive/natural/2022/12/25/png/'+ images.image + '.png')

  console.log(epicMappedDate);

  return (
    <div>EPIC</div>
  )
}

export default EPIC