import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return ( 
        <div className="home">
        <h1>Welcome to manbearcave.com</h1>
        {/* <img
          src="https://njkx.imgeng.in/w_1250/https://images.unsplash.com/photo-1555871158-b84594c7e343" 
          alt ="woods"
          /> */}
          <br />
        <Link to='/shop'>
        <button className="store-btn">Store</button>
        </Link>
        </div>
     );
}
 
export default Home;