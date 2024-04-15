import React from 'react'

const Carousel1Item = ({ item }) => {
  return (
    <div className='carousel1-item'>
      <div></div>
      <img className='carousel1-img' src={item.image}></img>
      <div className='carousel1-text'>
        <h3>{item.heading1}</h3>
        <h3>{item.heading}</h3>
        <p>{item.description}</p>
      </div>

    </div>
  )
}

export default Carousel1Item