import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      {/* Add a logo here if needed */}
      <div className="logo">My Portfolio</div>
      <ul className="navLinks">
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/skills" className="link">Skills</Link>
        </li>
        <li>
          <Link to="/projects" className="link">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
