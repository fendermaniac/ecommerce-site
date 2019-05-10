import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductCard from './ProductCard';
import Product from './Product';
import ProductSidebar from './ProductSidebar'
import './ProductList.css'

const ProductList = ({inventory, addToCart, sortPriceAsc, updateFilterProductsInput}) => {
  return ( <>
  <h1 className="product-header">Products</h1>   
  <div className="main-container">
  <ProductSidebar className="aside" updateFilterProductsInput = {updateFilterProductsInput}>
  Search: 
  Filter: 
  </ProductSidebar> 
  <div className="product-list-container">
  
  {/* <button onClick={ sortPriceAsc }>Sort Asc</button> */}
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
  </div> </>
   );
}
 
export default ProductList;