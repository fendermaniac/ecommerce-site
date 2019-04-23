import React from 'react';
import accounting from 'accounting';
import './Cart.css'

const Cart = ({cart}) => {
    return ( 
      
        <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart-items">
        {cart.map(item => 
            <div className="cart-item">
            <img src="https://via.placeholder.com/75" alt="thumbnail" />
                <h3>{item.product_name}</h3>
                <p>Price: {item.price}</p>
            </div>
        )
    }   
        </div>
        <p className="subtotal">Subtotal: &nbsp;
          {accounting.formatMoney(cart.reduce(
            (currentValue, item) => 
            {return parseFloat(item.price.replace(/\$/g, '')) + currentValue}, 0))
          }
        </p>

        {cart.length > 0 ? 
          (<button className="btn">Check Out</button>) : 
          (<p>Cart is empty</p>) 
        }        
        </div>
     );
}
 
export default Cart;