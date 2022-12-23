import React, { useEffect } from 'react'
import { useState } from 'react'

const EONET = ({neo}) => {
    const [asteroidList, setAsteroidList] = useState([])
    const neoReturn = neo && neo['near_earth_objects']['2022-12-23']
    
    const rocksMap = neo && neoReturn.map((asteroid, index) => {
        return <tr key={index}><td class="border border-slate-600">{asteroid.name}</td><td class="border border-slate-600">{asteroid.estimated_diameter.miles.estimated_diameter_max} miles</td><td class="border border-slate-600">{asteroid.is_potentially_hazardous_asteroid ? '☢️' : '❎'}</td><td class="border border-slate-600">{asteroid.close_approach_data[0].close_approach_date_full}</td></tr>})



  return (
    <div class='border border-sky-500'>
        <h2 class='text-center text-2xl subpixel-antialiased font-bold'>Asteroids - Near Earth Objects</h2>
        <table class='table-auto border-collapse border border-slate-500 mt-6'>
            <thead>
                <tr>
                    <th class='border border-slate-400'>Asteroid Name</th>
                    <th class='border border-slate-400'>Size {'(max diameter)'} </th>
                    <th class='border border-slate-400'>Potential Hazardous Asteroid?</th>
                    <th class='border border-slate-400'>Approach Date</th>
                </tr>
            </thead>
            <tbody class='text-center'>
                {rocksMap}
            </tbody>
        </table>
    </div>
  )
}

export default EONET