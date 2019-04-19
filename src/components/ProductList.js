import React from 'react';
import './ProductList.css'

const ProductList = (props) => {
  return ( 
  <div className="product-list-container">
    {props.inventory.map( item => 
      <div className="product-card">
      <h4>{item.product_name} </h4>
      <img src="https://via.placeholder.com/150" alt="product example" />
    <p>Price: {item.price}</p>
      <button onClick={() => props.addToCart(item)}>Add to cart</button>
      </div>   
    )}
  </div>
   );
}
 
export default ProductList;