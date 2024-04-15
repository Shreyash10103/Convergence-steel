import React from 'react'
import "../styles/products.css"
import ProductItem from "./ProductItem.js"
import ProductItems from './ProductItems.js';
import ProductItems1 from './ProductItems1.js'
import ProductItems3 from './ProductItems2.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar2 from './Navbar2.js';
import Footer1 from './Footer1.js';


const Product = () => {
  return (

    <div className='image3'>


      <div className='heading'>
        <div> </div>
        <p>Our Products</p>
        <div></div>

      </div>
      <ProductItem />
      <div>
        <div>

        </div>

      </div>

    </div>

  )
}

export default Product

