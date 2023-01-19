import React from "react";
import './Cart.css';
const Cart = (props) => {
  const totalPrice = props.cartItems.reduce((price,item) => price + item.quantity * item.price, 0);
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>
      <div>
        {props.cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img className="cart-items-img" src={item.image} alt={item.name} />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-func">
              <button className="add-item" onClick={() => props.addProductHandler(item)}>+</button>
              <button className="remove-item" onClick={() => props.removeProductHandler(item)}>-</button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * {item.price}e = {item.quantity * item.price}e
            </div>

          </div>

        ))}
        <div>
          <p className="cart-total-price">Total price: {totalPrice}e</p>
        </div>
      </div>
      <div>{props.cartItems.length>= 1 && (<button className="clear-cart" onClick={props.removeAllProductsHandler}>Clear Cart</button>)}</div>
      {props.cartItems.length === 0 && (
        <div className="cart-items-empty">No items added.</div>
      )}

      
    </div>
  );
};

export default Cart;