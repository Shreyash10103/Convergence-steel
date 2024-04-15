// Navmob.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { x } from 'react-icons-kit/feather/x';
import '../styles/Navmob.css';

const Navmob = ({ isOpen, toggleNavbar }) => {
  return (
    <div className={`navmob ${isOpen ? 'active' : ''}`}>
      <div className="navmob-content">
        <span className="close-btn" onClick={toggleNavbar}>
          <Icon icon={x} size={24} />
        </span>
        <ul className="navmob-links">
          <li>
            <Link to="/" onClick={toggleNavbar}>Home</Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleNavbar}>Products</Link>
          </li>
          <li>
            <Link to="/Services" onClick={toggleNavbar}>Services</Link>
          </li>
          <li>
            <Link to="/Construction" onClick={toggleNavbar}>Industries Served</Link>
          </li>


          <li>
            <Link to="/about" onClick={toggleNavbar}>About Us</Link>
          </li>
          <li>
            <Link to="/RfQ" onClick={toggleNavbar}><button className="main-btn">Request for quote</button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navmob;
