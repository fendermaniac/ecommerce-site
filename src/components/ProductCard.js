import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({item, addToCart}) => {
  return ( 
    <div className="product-card">
    <Link to={`/products/${item.id}`}>
        <h4>{item.product_name} </h4>
    </Link>
    <img src="https://picsum.photos/200" alt="product example" />
      <p><strong>Price: </strong>{item.price}</p>
    <button className="btn-small" onClick={() => addToCart(item)}>Add to cart</button>
    </div>   
   );
}
 
export default ProductCard;