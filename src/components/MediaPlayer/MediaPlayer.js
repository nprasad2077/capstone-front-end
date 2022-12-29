import React from 'react'

const MediaPlayer = () => {
  return (
    <div class='text-center text-xl mt-6'>
      <h2>Media Player</h2>

      <div>
        <video controls width='100%'>
          <source src='https://images-assets.nasa.gov/video/Orion_Artemis-I_b-roll_9_2021_FS/Orion_Artemis-I_b-roll_9_2021_FS~orig.mp4'></source>
        </video>
      </div>


    </div>
  )
}

export default MediaPlayer