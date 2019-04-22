import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductCard from './ProductCard';
import Product from './Product';
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

<Route path="products/:id" render={() => <Product {...this.props} />}  />
  </Router>
  
  </div>
   );
}
 
export default ProductList;