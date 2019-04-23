import React from 'react';
import bear from '../bear.svg';
import Navigation from './Navigation';
import CartStatus from './CartStatus';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = ({toggleMobileNav, mobileNavClass, cartCount}) => (<header className="navbar">
  <span className="navbar-toggle" onClick={toggleMobileNav}>
    <FaBars />
  </span>
  <Link to="/"><img src={bear} alt="bear" width="50px" className="logo" /></Link>
  <Navigation mobileNavClass={mobileNavClass} />
  <Link to="/cart">
    <CartStatus cartCount={cartCount} mobileNavClass={mobileNavClass} />
  </Link>
  
</header>)
 
export default NavBar;