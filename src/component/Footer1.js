import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

import logo from '../logo-no-background.png';
import { Link } from 'react-router-dom';

const Footer1 = () => {
  return (
    <div>

      <footer className="footer-container">
        <div className="row ms-auto mb-2 mb-1g-0">
          <div className="col">
            <img src={logo} alt="Logo" className="logo" />

          </div>
          <div className="col">
            <h3>Office<div className="underline"><span></span></div></h3>
            <p>Convergence Steel, PO Box</p>
            <p>PIN CODE 12345 Dubai, UAE</p>
            <a href="mailto:ConvergencesteelAR@gmail.com" className="email-id">ConvergencesteelAR@gmail.com</a>
            <h4> +91 9448459020</h4>
          </div>
          <div className="col">
            <h3>Links<div className="underline"><span></span></div></h3>
            <ul className="footer">
              <li><Link to="/" className="footer" >Home</Link></li>
              <li><Link to="/products" className="footer" >Products</Link></li>
              <li><Link to="/about" className="footer" >About Us</Link></li>
              <li><Link to="/Construction" className="footer" >Industries</Link></li>
              <li><Link to="/rfq" className="footer" >Contact Us</Link></li>
            </ul>
          </div>
          <div className="col">
            <h3>Newsletter<div className="underline"><span></span></div></h3>
            <span>
              <div className="social-icons">
                <a href='https://m.facebook.com/profile.php?id=100088433043069&mibextid=ZbWKwL&wtsid=rdr_08V9tE3Q4LyIRyKe8' target="_blank"> <FontAwesomeIcon icon={faFacebook} /></a>
                <a href='https://www.linkedin.com/company/tradepass-ecomm/' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>

                <a href='https://www.instagram.com/tradepasstechnology?igsh=czhuZXBsejNtZndo' target="_blank" > <FontAwesomeIcon icon={faInstagram} /></a>
                <a><FontAwesomeIcon icon={faWhatsapp} /></a>
                <FontAwesomeIcon icon={faPinterest} />
              </div>


            </span>

          </div>
        </div>
        <hr />
        <p className="copyright">Convergence Steel © 2024 - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Footer1;
