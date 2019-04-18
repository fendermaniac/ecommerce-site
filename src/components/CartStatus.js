import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartStatus = (props) => {
  return ( 
    <div>
      <FaShoppingCart /> {props.cartCount}
    </div>
   );
}
 
export default CartStatus;