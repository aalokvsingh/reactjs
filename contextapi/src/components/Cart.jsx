import React from 'react';
import { useCart } from '../context/CartContext'; // Import the custom hook to access cart

export default function Cart() {
  const { items, removeItem, clearCart, totalItems, totalPrice } = useCart();

  return (
    <div className="w-64 border p-4 rounded">
      <h2 className="text-xl font-bold mb-3">Cart</h2>
      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <button onClick={() => removeItem(item.id)} className="text-red-600">
                ✕
              </button>
            </div>
          ))}
          <hr className="my-2" />
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ₹{totalPrice}</p>
          <button
            onClick={clearCart}
            className="bg-red-600 text-white w-full mt-3 py-1 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}