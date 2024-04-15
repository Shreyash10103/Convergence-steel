import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Slider.css'; // Import Slider.css for custom styles

import { HashLink as Linkk } from 'react-router-hash-link';

const Slider = ({ start }) => {
  return (
    <div className="slider-container">
      <Carousel fade>
        {start.map((item, index) => (
          <Carousel.Item key={index}>
            <img className='d-block w-100 h-50 ; overflow-hidden ' src={item} alt="Slide" />
            <Carousel.Caption className="carousel-caption">
              <div>

                <Linkk to="#Productt"><button type="button" className="main1112">Explore</button></Linkk>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
