import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ProductCard from './ProductCard';
import './ProductList.css'

const ProductList = ({inventory, addToCart}) => {
  return ( 
  <div className="product-list-container">
  <Router>
      {inventory.map( item => 
      <ProductCard 
      item = {item}
      addToCart = {addToCart}
      />  
    )}
  </Router>
  
  </div>
   );
}
 
export default ProductList;