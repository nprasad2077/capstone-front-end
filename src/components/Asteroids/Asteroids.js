import React, { useEffect } from 'react'
import { useState } from 'react'

const EONET = ({neo}) => {
    const [asteroidList, setAsteroidList] = useState([])
    const neoReturn = neo && neo['near_earth_objects']['2022-12-23']

    // console.log(eonet && eonetReturn.map(asteroid => asteroid.name));
    const rocksMap = neo && neoReturn.map(asteroid => {
        return <tr><td>{asteroid.name}</td></tr>})
    console.log(rocksMap);




  return (
    <div class='border border-sky-500'>
        <h2>Asteroids - Near Earth Objects</h2>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>size</th>
                    <th>date</th>
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