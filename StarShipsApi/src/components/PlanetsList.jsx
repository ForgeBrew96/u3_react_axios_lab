import { useState, useEffect } from "react"
import axios from 'axios'

const PlanetsList = (props) => {
const [planets, setPlanets] = useState([])


    useEffect(() => {
        const getPlanets = async () => {
            const response = await axios.get('https://swapi.dev/api/planets')
            console.log(response.data.results)
            setPlanets(response.data.results)
        }
        getPlanets()
    }, [])

    return (
        <div>
            <h2>Planet List</h2>
        
           <ul>
            {
planets.map((planet) => (
    <li key={planet._id} className="card">
        <h1>{planet.name}</h1>
        <h2>{planet.climate}</h2>
    </li>
))
}
           </ul>
        </div>
    )
}

export default PlanetsList