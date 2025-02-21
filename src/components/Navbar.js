import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/form">Add Shipping</Link>
        <Link to="/entries">Shipping History</Link>
      </div>
    </nav>
  );
}

export default Navbar;
