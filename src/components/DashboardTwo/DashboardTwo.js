import React from 'react'

// Components
import SlideShow from '../SlideShow/SlideShow'
import EPIC from '../EPIC/EPIC'
import Image from '../Image/Image'

const DashboardTwo = ({epic, searchMapped, search, mediaInput, setMediaInput, getSearch, mediaForm, setMediaForm}) => {
  return (
    <div class='flex'>
        <div class='w-1/3'>
            <SlideShow epic={epic} />
        </div>
        <div class='w-2/3'>
          <Image searchMapped={searchMapped} search={search} mediaInput={mediaInput} setMediaInput={setMediaInput} getSearch={getSearch} mediaForm={mediaForm} setMediaForm={setMediaForm} />
        </div>
    </div>
  )
}

export default DashboardTwo