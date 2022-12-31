import React from 'react'


const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=1&api_key=DEMO_KEY'

const Perseverance = () => {

  const getPersRover = async () => {
    const response = await axios({
      method: 'get',
      url: url
    })
    .then(res => setSearch(res.data))
    .catch(err => console.log(err))
  }



  return (
    <div>Perseverance</div>
  )
}

export default Perseverance