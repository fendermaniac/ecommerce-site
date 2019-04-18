import React from 'react';
import bear from '../bear.png';
import Navigation from './Navigation';
import CartStatus from './CartStatus';
import {FaBars} from 'react-icons/fa';
import './NavBar.css';


const NavBar = (props) => {
  return (         
  <header className="navbar">
  <span className="navbar-toggle" id="js-navbar-toggle"> 
    <FaBars />
  </span>
   
    <img src={bear} alt="bear" width="50px" className="logo"/>  
    <Navigation />
    <CartStatus cartCount={props.cartCount} />
  </header> 
);
}
 
export default NavBar;