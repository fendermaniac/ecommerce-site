import React from 'react';
import accounting from 'accounting';
import './Cart.css'

const Cart = ({cart, checkOut, removeFromCart}) => {
    return ( 
        <div>
        <h1 className="cart-header">Your Shopping Cart</h1>
        <div className="cart-container">
        
        <div className="cart-items">
        {cart.map(item => 
            <div className="cart-item">
            <img src="https://picsum.photos/75" alt="thumbnail" />
                <h3>{item.product_name}</h3>
                <p>Price: {item.price}</p>
                <button className="btn-small" onClick={removeFromCart}>Remove from Cart</button>
            </div>
        )
    }   
        </div>
        <div className="cart-summary">
                
        {cart.length > 0 ? 
          (<>
          <p className="subtotal">Subtotal: &nbsp;
          {accounting.formatMoney(cart.reduce(
            (currentValue, item) => 
            {return parseFloat(item.price.replace(/\$/g, '')) + currentValue}, 0))
          }
        </p>
          <button className="btn" onClick={checkOut}>Check Out</button>
          </>
          ) : 
          (
          <div className="empty-cart">
          <p>Your cart is empty!</p></div>) 
        } 
        </div>
       
        </div>  
        </div>

     );
}
 
export default Cart;