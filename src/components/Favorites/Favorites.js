import React from 'react'

const Favorites = ({mongoFound}) => {
    console.log(mongoFound);

    const asodMap = mongoFound && mongoFound.map((img) => <img class='m-4' alt='NASA ASOD' src={img}></img>)


  return (
    <div>
        <div class='flex flex-col justify-center items-center'>
            {asodMap}
            

        </div>
    </div>
  )
}

export default Favorites