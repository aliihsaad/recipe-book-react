import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">🍽️ Kitchen Book</Link>
            <ul className="navbar-links">
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
    );
}

export default Navbar;