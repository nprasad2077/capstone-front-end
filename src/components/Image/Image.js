import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Image = ({search, searchMapped}) => {

  const [titles, setTitles] = useState([])

  // const getSearch = async () => {
  //   const response = await axios({
  //     method: 'get',
  //     url: 'https://images-api.nasa.gov/search?q=moon'
  //   })
  //   .then(res => setSearch(res.data))
  //   .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   getSearch()
  // }, [])

  // console.log(search);

  // const searchDetails = search && search.collection.items

  // console.log(searchDetails);

  // const searchMapped = search && searchDetails.map((search, index) => <Link to={'media/'+ index}>{search.data[0].title}</Link>)

  // console.log(searchMapped)



  return (
    <div class='border border-sky-500 text-center flex-col'>

      <h2 class='text-center text-2xl subpixel-antialiased font-bold'>NASA Image and Video Library</h2>
      <div class='flex-col mt-10'>
        {search.collection && searchMapped}
      </div>

    </div>
  )
}

export default Image