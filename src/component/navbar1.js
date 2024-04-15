import React from 'react';
import { ReactNavbar } from 'overlay-navbar';
import logo from "../styles/tradepasslogo.jpg";
import '../styles/navbarr.css'

const Navbar1 = () => {
  return (
    <div className='navvv' style={{ textAlign: 'right' }}>
      <ReactNavbar
        burgerColorHover='crimson'
        navColor1="black"
        link1Color="white"
        logo={logo}
        alt="Logo"
        logoWidth="16vmax"
        logoHoverColor="crimson"
        link1Text="Home"
        link2Text="Products"
        link3Text="About Us"
        link4Text="RfQ"
        link1Url=""
        link2Url="products"
        link3Url="about"
        link4Url="RfQ"
        link1Size="2vmax"
        link1Family="cursive"
        link1ColorHover="crimson"
        link1Margin="1.5vmax"
        link2Margin="0vmax"
        link4Margin="1vmax"
      />
    </div>
  );
};

export default Navbar1;
