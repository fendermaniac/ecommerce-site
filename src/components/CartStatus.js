import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "./CartStatus.css";

const CartStatus = (props) => {
  return ( 
    <div className="cart-status">
      <FaShoppingCart /> {props.cartCount}
    </div>
   );
}
 
export default CartStatus;