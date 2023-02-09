import "../assets/css/navbar.css";
import {Link} from "react-router-dom";

export default function navbar() {
    return (
        <nav className="navbar"><center>
            <Link to="/"> Home </Link> | <Link to="/Favoritos">Favoritos</Link> </center>
        </nav>
    );
}