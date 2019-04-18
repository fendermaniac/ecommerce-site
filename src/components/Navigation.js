import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
  return ( 
    <ul className={props.mobileNavClass}>
       <Link to="/">
          <li>Home</li>
       </Link>
       <Link to="/about">
         <li>About</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
        </Link>
      
    </ul>
   );
}
 
export default Navigation;