import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "./CartStatus.css";

const CartStatus = ({mobileNavClass, cartCount}) => {
  return ( 
    <div className={mobileNavClass}>
      <FaShoppingCart /> &nbsp; {cartCount}
    </div>
   );
}
 
export default CartStatus;