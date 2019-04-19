import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
  return ( 
    <ul className={props.mobileNavClass}>
       <Link to="/">
          <li className="nav-links">Home</li>
       </Link>
       <Link to="/about">
         <li className="nav-links">About</li>
      </Link>
      <Link to="/contact">
        <li className="nav-links">Contact</li>
        </Link>
      
    </ul>
   );
}
 
export default Navigation;