import React, { useEffect } from 'react'
import { useState } from 'react'

const EONET = ({neo}) => {
    const [asteroidList, setAsteroidList] = useState([])
    const neoReturn = neo && neo['near_earth_objects']['2022-12-23']
    console.log(neo && neoReturn[0].close_approach_data[0].close_approach_date_full)
    console.log(neo && neoReturn[0].estimated_diameter.miles.estimated_diameter_max)
    console.log(neo && neoReturn[0].is_potentially_hazardous_asteroid)

    const rocksMap = neo && neoReturn.map((asteroid, index) => {
        return <tr key={index}><td>{asteroid.name}</td><td>{asteroid.estimated_diameter.miles.estimated_diameter_max} miles</td><td>{asteroid.is_potentially_hazardous_asteroid ? '☢️' : '❎'}</td><td>{asteroid.close_approach_data[0].close_approach_date_full}</td></tr>})



  return (
    <div class='border border-sky-500'>
        <h2>Asteroids - Near Earth Objects</h2>
        <table>
            <thead>
                <tr>
                    <th>Asteroid Name</th>
                    <th>Size {'(diameter)'} </th>
                    <th>Potential Hazardous Asteroid?</th>
                    <th>Approach Date</th>
                </tr>
            </thead>
            <tbody>
                {rocksMap}
            </tbody>
        </table>
    </div>
  )
}

export default EONET