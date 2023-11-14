import {NavLink} from "react-router-dom";

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
                    <NavLink to="/allrecipes">All Recipes</NavLink>
                </li>
                <li>
                    <NavLink to="/emptythefridge">Empty the fridge</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">Sign In</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;