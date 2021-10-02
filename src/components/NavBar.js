import NavLink from "./NavLink";

const NavBar = () => {
    return ( 
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>    
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>    
            </li>
        </ul>
     );
}
 
export default NavBar;