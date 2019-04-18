import React from 'react';
import bear from '../bear.png';
import Navigation from './Navigation';
import CartStatus from './CartStatus';
import {FaBars} from 'react-icons/fa';
import './NavBar.css';


const NavBar = (props) => (<header className="navbar">
  <span className="navbar-toggle" onClick={props.toggleMobileNav}>
    <FaBars />
  </span>
  <img src={bear} alt="bear" width="50px" className="logo" />
  <Navigation mobileNavClass={props.mobileNavClass} />
  <CartStatus cartCount={props.cartCount} mobileNavClass={props.mobileNavClass} />
</header>)
 
export default NavBar;