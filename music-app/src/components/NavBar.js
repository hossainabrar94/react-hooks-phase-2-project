import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavNar(){

    return(
        <nav className="navbar">
            <NavLink to='/'>
                Library
            </NavLink>
            <NavLink to='/playlists'>
                Playlists
            </NavLink>
            <NavLink to='/genres'>
                Genres
            </NavLink>

        </nav>
    )
}

export default NavNar;