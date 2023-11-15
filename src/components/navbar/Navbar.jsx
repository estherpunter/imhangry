import {NavLink} from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <nav>
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
                        'active-menu-link' : 'default-menu-link'} to="/signin">Sign In</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;