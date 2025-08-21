import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <CartProvider>
      <div className="p-6 flex gap-10">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}
