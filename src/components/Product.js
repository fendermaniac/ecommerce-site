import React from 'react';

const Product = ({ params }) => {
  return ( 
    <div>
      <h2>{params.id}</h2>
      <p>Reviews: ⭐⭐⭐⭐⭐</p>
      <img src="https://via.placeholder.com/150" alt="product example" />
      <p>Long Description of Product.Lorem ipsum dolor sit amet, 
         consectetur adipiscing elit, sed do eiusmod tempor incididunt 
         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
         nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
         fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
         culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Price: $100.00</p>
      <button>Add to cart</button>
      <p>Read Reviews</p>
      <p>Reviews Component should go here.</p>
    </div>
   );
}
 
export default Product;