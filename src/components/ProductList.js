import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Product from './Product';
import './ProductList.css'

const ProductList = (props) => {
  return ( 
  <div className="product-list-container">
  <Router>
      {props.inventory.map( item => 
      <div className="product-card">
      <Link to={`/products/${item.product_name.replace(/\s+|,|-+/g, '')}`}><h4>{item.product_name} </h4></Link>
      <img src="https://via.placeholder.com/150" alt="product example" />
    <p>Price: {item.price}</p>
      <button onClick={() => props.addToCart(item)}>Add to cart</button>
      </div>   
    )}
  </Router>
  
  </div>
   );
}
 
export default ProductList;