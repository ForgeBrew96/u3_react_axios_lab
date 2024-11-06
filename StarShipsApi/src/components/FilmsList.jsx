import { useState, useEffect } from "react"
import axios from 'axios'
import Button from "./Button"

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

const filmOnClick = () => {
    console.log('film was clicked')
}
    return (
        <div>
            <h2>Film List</h2>
        <Button
        title="Film"
        onClick={filmOnClick}></Button>
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