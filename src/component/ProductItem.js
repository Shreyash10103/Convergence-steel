import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/ProductItems.css"
const ProductItem = () => {
  const location = useLocation();
  const [icon, seticon] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 1000) {
      seticon(true);
    } else {
      seticon(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <div>
      <div className={icon ? 'prodact' : 'ProductItem'}>


        <Link style={{
          backgroundColor: location.pathname.includes("/plate") || location.pathname.includes("/products")
            ? "rgba(0,130,225,0.1)"
            : ""
        }} className={icon ? 'itemact' : 'item'} to='/plate'>Plates</Link>
        <Link style={{
          backgroundColor: location.pathname.includes("/CRGO")
            ? "rgba(0,130,225,0.1)"
            : ""
        }} className={icon ? 'itemact' : 'item'} to='/CRGO'>CRGO</Link>
        <Link style={{
          backgroundColor: location.pathname.includes("/Insert")
            ? "rgba(0,130,225,0.1)"
            : ""
        }} className={icon ? 'itemact' : 'item'} to='/Insert'>Inserts</Link>




      </div>


    </div>
  )
}

export default ProductItem
