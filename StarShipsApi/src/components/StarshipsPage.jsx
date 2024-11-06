import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from './Button';

const StarshipsPage = ({ starships }) => {
  const { starshipId } = useParams();
  const ship = starships.find(ship => ship.url.split('/').slice(-2, -1)[0] === starshipId);

  const starShipOnClick = () => {
    console.log('starship was clicked')
}

  if (!ship) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>{ship.name}</h2>
      <Button
      onClick={starShipOnClick}
      title="Ship Locator"></Button>
      <dl>
        <dt>Model:</dt>
        <dd>{ship.model}</dd>
        <dt>Manufacturer:</dt>
        <dd>{ship.manufacturer}</dd>
        <dt>Cost in credits:</dt>
        <dd>{ship.cost_in_credits}</dd>
      </dl>
      <Link to="/starshipslist">Starship List</Link>
    </>
  );
};

export default StarshipsPage;
