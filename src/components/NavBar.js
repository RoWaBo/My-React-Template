import { Link } from "@reach/router";

const NavBar = () => {
    return ( 
        <ul>
            <li>
                <Link to="/">Home</Link>    
            </li>
            <li>
                <Link to="/contact">Contact</Link>    
            </li>
        </ul>
     );
}
 
export default NavBar;