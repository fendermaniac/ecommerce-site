import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return ( 
        <div className="container">
        <section className="home-banner">
        <h1>Welcome to ManBearCave.com</h1>
        <h4>Your online destination for stuff</h4>
          <br />
        <Link to='/shop'>
        <button className="store-btn btn">Store</button>
        </Link>
        </section>
        <section className="featured-items">
        <div className="featured-image"></div>
        <div className="featured-content">
        
        <h1>Featured Items </h1>
        <p>"Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum."</p>
        
        
        </div>
        </section>
        </div>
     );
}
 
export default Home;