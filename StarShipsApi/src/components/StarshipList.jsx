import { useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const StarshipList = ({ setStarships, starships }) => {
  useEffect(() => {
    const getStarships = async () => {
      const response = await axios.get('https://swapi.dev/api/starships');
      setStarships(response.data.results);
    };
    getStarships();
  }, [setStarships]);

  return (
    <div>
      <h2>Starship List</h2>
      <ul>
        {starships.map((starship, index) => {
          const id = starship.url.split('/').slice(-2, -1)[0];
          return (
            <li key={id} className="card">
              <Link to={`/starshipslist/${id}`}>{starship.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StarshipList;
