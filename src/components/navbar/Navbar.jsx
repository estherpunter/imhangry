import {NavLink} from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <h1>H</h1>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ?
                        'active-menu-link' : 'default-menu-link'} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ?
                        'active-menu-link' : 'default-menu-link'} to="/allrecipes">All Recipes</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ?
                        'active-menu-link' : 'default-menu-link'} to="/emptythefridge">Empty the fridge</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ?
                        'active-menu-link' : 'default-menu-link'} to="/signup">Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;