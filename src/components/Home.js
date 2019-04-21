import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <>
        <h1>Welcome to manbearcave.com</h1>
        <img
          src="https://njkx.imgeng.in/cr_950,450,0,400/https://images.pexels.com/photos/749317/pexels-photo-749317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt ="woods"
          />
          <br />
        <Link to='/shop'>
        <button>Store</button>
        </Link>
        </>
     );
}
 
export default Home;