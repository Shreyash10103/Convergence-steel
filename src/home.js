import React, { useState } from 'react';
import data from "./images.json";
import Slider from './component/Slider.js';
import Content from './component/Content.js';
import Content1 from './component/Content1.js';
import Content3 from './component/Content3.js';
import Envo from './component/Envo.js';
import Industry from './component/industry.js';


const Home = () => {


  return (
    <div className="home-container">
      <div className="left-content">
        <Slider start={data.slider} />
        <Content3 />
        <Content />
        <Content1 />
        <Industry />
        <Envo />
      </div>

    </div>
  );
}

export default Home;
