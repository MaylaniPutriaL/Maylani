import React from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="home" smooth={true} duration={500}>
          Portfolio
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-70}>
            Skill
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            Project
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;