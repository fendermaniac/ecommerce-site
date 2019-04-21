import React from 'react';

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
        <p>Subtotal: 
          {cart.reduce(
            (currentValue, item) => 
            {return parseFloat(item.price.replace(/\$/g, '')) + currentValue}, 0)
          }
        </p>
        </>
     );
}
 
export default Cart;