import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "../styles/navbar.css"
import logo from '../1.png';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navigation-wrap">
        <div className="container">
          <img className='image' src={logo}></img>

          <a className="navbar-brand" href="#">
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-stream navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-1g-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="https://www.tradepass.co.in/" className="nav-link">Tradepass</Link>
              </li>
              <li className="nav-item">
                <Link to="/RfQ" className="nav-link">RfQ </Link>
              </li>
              {/* Add more menu items */}
              <li><button className="main-btn">+91 9525785391</button></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
