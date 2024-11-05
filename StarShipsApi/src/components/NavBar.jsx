import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <div>
        <li>
            <Link to ='/'>Home</Link>
        </li>
        <li>
            <Link to ='/starshipslist'>Starships</Link>
        </li>
        <li>
            <Link to ='/films'>films</Link>
        </li>
        <li>
            <Link to ='/planets'>planets</Link>
        </li>
        <li>
            <Link to ='/characters'>characters</Link>
        </li>
        </div>
    )
}

export default NavBar