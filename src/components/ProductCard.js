import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({item, addToCart}) => {
  return ( 
    <div className="product-card">
    <Link to={`/products/${item.product_name.replace(/\s+|,|-+/g, '')}`}>
        <h4>{item.product_name} </h4>
    </Link>
    <img src="https://via.placeholder.com/150" alt="product example" />
      <p>Price: {item.price}</p>
    <button onClick={() => addToCart(item)}>Add to cart</button>
    </div>   
   );
}
 
export default ProductCard;