import React from 'react';
import HoverAnimation1 from 'hover-animation/dist/lib/HoverAnimation1';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../styles/logo1.css";



const Footer5 = () => {
  return (
    <>
      <span>
        <div className='logo1'>
          <HoverAnimation1 Icon={FaFacebook} IconSize="2.1vmax" Padding="0.2vmax" Color="black" BackgroundColor="white" />
          <HoverAnimation1 Icon={FaInstagramSquare} IconSize="2.1vmax" Padding="0.2vmax" Color="white" BackgroundColor="black" />
          <HoverAnimation1 Icon={FaLinkedin} IconSize="2.1vmax" Padding="0.2vmax" Color="white" BackgroundColor="black" />
          <HoverAnimation1 Icon={FaWhatsappSquare} IconSize="2.1vmax" Padding="0.2vmax" Color="white" BackgroundColor="black" />
          <HoverAnimation1 Icon={FaTwitter} IconSize="2.1vmax" Padding="0.2vmax" Color="white" BackgroundColor="black" />

        </div>

      </span>
    </>

  );
}

export default Footer5;
