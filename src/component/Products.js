import React from 'react'
import Product from './Product.js';
import Footer1 from './Footer1.js';
import Navbar2 from './Navbar2.js';
import '../styles/Pr.css'

const Products = () => {
  return (

    <>
      <div className='image2'>
        <img src='https://www.inventiva.co.in/wp-content/uploads/2023/05/Tools-16.jpg'  ></img>
        <h1 class="top-left">Forging Connections with Durability</h1>
        <h5 class="top-left1"> Unleashing Possibilities with Our Versatile Steel Solutions</h5>
      </div>
      <Product />

    </>

  )
}

export default Products
