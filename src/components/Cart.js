import React from 'react';
import accounting from 'accounting';

const Cart = ({cart}) => {
    return ( 
        <>
        <h1>Your Cart</h1>
        <ul>
        {cart.map(item => 
            <li>
                <h3>{item.product_name}</h3>
                <p>Price: {item.price}</p>
            </li>
        )
    }   
        </ul>
        <p>Subtotal: &nbsp;
          {accounting.formatMoney(cart.reduce(
            (currentValue, item) => 
            {return parseFloat(item.price.replace(/\$/g, '')) + currentValue}, 0))
          }
        </p>
        <button>Check Out</button>
        </>
     );
}
 
export default Cart;