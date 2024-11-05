import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import StarshipList from "./StarshipList.jsx";
import Films from "./FilmsList.jsx";
import Planets from "./PlanetsList.jsx";
import Characters from "./CharactersList.jsx";
import StarshipsPage from "./StarshipsPage.jsx";

const Main = () => {
  const [starships, setStarships] = useState([]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<h2>Home Page </h2>} />
        <Route path='/starshipslist' element={<StarshipList starships={starships} setStarships={setStarships} />} />
        <Route path='/starshipslist/:starshipId' element={<StarshipsPage starships={starships} />} />
        <Route path='/films' element={<Films />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/characters' element={<Characters />} />
      </Routes>
    </div>
  );
};

export default Main;
