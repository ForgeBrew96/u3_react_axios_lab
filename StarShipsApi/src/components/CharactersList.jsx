import { useState, useEffect } from "react"
import axios from 'axios'

const CharacterList = (props) => {
const [characters, setCharacter] = useState([])


    useEffect(() => {
        const getCharacters = async () => {
            const response = await axios.get('https://swapi.dev/api/people')
            console.log(response.data.results)
            setCharacter(response.data.results)
        }
        getCharacters()
    }, [])

    return (
        <div>
            <h2>Character List</h2>
        
           <ul>
            {
characters.map((character) => (
    <li key={character._id} className="card">
        <h1>{character.name}</h1>
       <h2>{character.homeworld}</h2>
    </li>
))
}
           </ul>
        </div>
    )
}

export default CharacterList