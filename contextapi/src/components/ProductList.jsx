import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 },
];

export default function ProductList() {
  const { addItem } = useCart();

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Products</h2>
      {products.map((product) => (
        <div key={product.id} className="border p-3 mb-2 rounded flex justify-between">
          <span>
            {product.name} – ₹{product.price}
          </span>
          <button
            onClick={() => addItem(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
