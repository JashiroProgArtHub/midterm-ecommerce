import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const handleCheckout = () => {
  Swal.fire({
    title: "Checkout Successful 🎉",
    text: "Thank you for shopping with us!",
    icon: "success",
    confirmButtonText: "OK",
    confirmButtonColor: "#4f46e5", 
  });
};

const Cart = () => {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return (
      <div className="cart-page flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">🛒 Your Cart is Empty</h2>
        <Link
          to="/shop"
          className="bg-primary text-inverse px-6 py-3 rounded-lg shadow-md hover:bg-secondary transition"
        >
          Go Shopping
        </Link>
      </div>
    );

  return (
    <div className="cart-page max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item flex items-center gap-4 border rounded-lg p-4 shadow-sm"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>

                <div className="flex items-center gap-3 mt-3">
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, +e.target.value)}
                    className="w-16 border rounded px-2 py-1 text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-4">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-3">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={clearCart}
              className="w-full border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition"
            >
              Clear Cart
            </button>
            <button onClick={handleCheckout} className="w-full bg-primary text-inverse px-4 py-3 rounded-lg hover:bg-secondary transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
