import React, { useRef, useState } from 'react'
import logo from '../logo-no-background.png'
import { Link } from 'react-router-dom'
import "../styles/Navbar2.css"
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'
import Navmob from './Navmob.js'


const Navbar2 = () => {
  const [fix, setFix] = useState(false);
  const [toggle, setToggler] = useState(false);
  const handleToggle = () => {
    setToggler(!toggle);
  }
  const [navbar, setnavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <div className='navbartot active'>
        <div className={navbar ? 'navbar2 active' : 'navbar2'}>
          <a href=""><img className="image" src={logo}></img></a>
        </div>
        <div>
          <nav className={navbar ? 'navbar12 active' : 'navbar12'}>


            <ul className={navbar ? 'navbar10 active' : 'navbar10'}>
              <li className="nav-item">
                <Link to="/" className="link2">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/plate" className="link2">Products</Link>
              </li>'
              '

              <li className="nav-item">
                <Link to="/Construction" className="link3"> Industries </Link>
              </li>

              <li className="nav-item">
                <Link to="/Services" className="link2">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="link2">About Us</Link>
              </li>

              <li className='lion'>           <Link to="/RfQ" ><button className="main-btn">Request for quote</button></Link>
              </li>
            </ul>

            <div className='toggle-icon' onClick={handleToggle}>

              {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
            </div>


          </nav>
        </div>

        {toggle ? <Navmob isOpen={toggle} toggleNavbar={handleToggle} /> : null}


      </div >
    </>
  )
}

export default Navbar2