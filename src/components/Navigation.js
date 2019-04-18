import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return ( 
    <ul className="main-nav">
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