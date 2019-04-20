import React from 'react';

const Cart = (props) => {
    return ( 
        <>
        <h1>Your Cart</h1>
        <ul>
        {props.cart.map(item => 
            <li>
                <h3>{item.product_name}</h3>
                <p>Price: {item.price}</p>
            </li>
        )
    }   
        </ul>
        <p>Subtotal: 
          {props.cart.reduce(
            (currentValue, item) => 
            {return parseFloat(item.price.replace(/\$/g, '')) + currentValue}, 0)
          }
        </p>
        </>
     );
}
 
export default Cart;