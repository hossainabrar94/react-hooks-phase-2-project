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
            <NavLink to='/artists'>
                Artists
            </NavLink>
            <NavLink to='/new'>
                Add Song
            </NavLink>
        </nav>
    )
}

export default NavNar;