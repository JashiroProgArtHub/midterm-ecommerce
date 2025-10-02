import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty</h2>
        <Link to="/">Go Shopping</Link>
      </div>
    );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) => updateQty(item.id, +e.target.value)}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={clearCart}>Clear Cart</button>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
