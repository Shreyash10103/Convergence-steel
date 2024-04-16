import React, { useState } from 'react';
import Carousel1Item from './Carousel1Item.jsx';
import '../styles/Carousel1Item.css';

const Carousel1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      heading1: 'Sustainability',
      heading: 'Committed to a Greener Future',
      description: 'Eco-friendly products : Convergence Steel is dedicated to minimizing its environmental impact through its overall processes',
      image: 'https://www.jindalsteelpower.com/_next/image?url=https%3A%2F%2Fd2lptvt2jijg6f.cloudfront.net%2Fjspsteelpower20%2Fcustom%2F1700650946img14.jpg&w=1920&q=75'
    },
    {
      heading1: 'Sustainability',
      heading: 'Committed to a Greener Future',
      description: 'Sustainable steel products: Convergence Steel has best steel products that meet stringent environmental standards while maintaining high performance and durability.',
      image: 'https://www.jindalsteelpower.com/_next/image?url=https%3A%2F%2Fd2lptvt2jijg6f.cloudfront.net%2Fjspsteelpower20%2Fcustom%2F1702964068img16.jpg&w=1920&q=75'
    }
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className='carousell'>
      <div className='carousel7'>
        <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {items.map((item, index) => (
            <Carousel1Item key={index} item={item} width="100%" />
          ))}
        </div>
        <div className='carousel-buttons1'>
          <button className='button-arrow' onClick={() => updateIndex(activeIndex - 1)}>
            <span className="material-symbols-outlined">
              arrow_back_ios_new
            </span>
          </button>
          <div className='indicators'>
            {items.map((_, index) => (
              <button key={index} onClick={() => updateIndex(index)} className='indicator-buttons'>
                <span className={`material-symbols-outlined ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                  radio_button_checked
                </span>
              </button>
            ))}
          </div>
          <button className='button-arrow' onClick={() => updateIndex(activeIndex + 1)}>
            <span className="material-symbols-outlined">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
