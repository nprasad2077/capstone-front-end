import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Button } from 'flowbite-react';

const ASOD = ({asod, mongoPut}) => {

  // console.log(asod);
  console.log('hello', mongoPut);

  const putASOD = () => {
    axios.put('https://calm-brushlands-38440.herokuapp.com/update', mongoPut)
    .then(res => {console.log(res.data)})
    .catch(err => {console.log(err)})
  }




  return (
    <div class='mt-5 border-2 border-slate-300 content-center flex-col p-4 mx-5 bg-slate-800'>
      <h2 class='text-center text-sm'>Astronomy Picture of the Day</h2>
      <h3 class='text-center text-2xl subpixel-antialiased font-bold mt-4'>{asod.title}</h3>
      <img src={asod.hdurl} class='self-center mt-6 p-1 w-full'></img>
      <p class='mt-8 p-6 '>Description: {asod.explanation}</p>
      <Button onClick={putASOD}>❤️</Button>
    </div>
  )
}

export default ASOD