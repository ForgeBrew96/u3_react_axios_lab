import { useState, useEffect } from "react"
import axios from 'axios'

const FilmsList = (props) => {
const [films, setFilms] = useState([])


    useEffect(() => {
        const getFilms = async () => {
            const response = await axios.get('https://swapi.dev/api/films')
            console.log(response.data.results)
            setFilms(response.data.results)
        }
        getFilms()
    }, [])

    return (
        <div>
            <h2>Film List</h2>
        
           <ul>
            {
films.map((film) => (
    <li key={film._id} className="card">
        <h1>{film.title}</h1>
        <h2>{film.characters}</h2>
    </li>
))
}
           </ul>
        </div>
    )
}

export default FilmsList