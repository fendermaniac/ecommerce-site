import React from 'react';
import './Footer.css';

const Footer = () => {
    return ( 
       <div className="footer-container">
        <div className="footer-column">
           <h1>ManBearCave.com</h1> 
           <p>12345 West End Blvd</p>
           <p>Big Sky, Montana 14203</p>

        </div>
        <div className="footer-column">
        <h2>Categories</h2>
        <ul>
            <li>Produce</li>
            <li>Gear</li>
            <li>Stuff</li>
            <li>More Stuff</li>
            <li>Widgets</li>
        </ul>
        </div>
        <div className="footer-column">
        <h2>Help & Info</h2>
        <ul>
            <li>Returns</li>
            <li>FAQ</li>
            <li>Shipping & Delivery</li>
            <li>Terms of Service</li>
        </ul>
        </div>

       </div> 
     );
}
 
export default Footer;