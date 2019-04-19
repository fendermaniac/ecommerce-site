import React from 'react';
import './ProductList.css'

const ProductList = (props) => {
  return ( 
  <div className="product-list-container">
    {props.inventory.map( item => 
      <div className="product-card">
      <h2>{item.product_name} </h2>
      <img src="https://via.placeholder.com/150" alt="product example" />
      {/* <p>{item.long_description}</p> */}
    <p>Price: {item.price}</p>
      <button>Add to cart</button>
      </div>   
    )}
    }
  
  </div>
   );
}
 
export default ProductList;