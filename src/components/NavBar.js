import React from 'react';
import bear from '../bear.png';
import Navigation from './Navigation';
import CartStatus from './CartStatus';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => (<header className="navbar">
  <span className="navbar-toggle" onClick={props.toggleMobileNav}>
    <FaBars />
  </span>
  <Link to="/"><img src={bear} alt="bear" width="50px" className="logo" /></Link>
  <Navigation mobileNavClass={props.mobileNavClass} />
  <CartStatus cartCount={props.cartCount} mobileNavClass={props.mobileNavClass} />
</header>)
 
export default NavBar;