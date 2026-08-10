// components/GlobalCartDrawer.tsx
"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

export default function GlobalCartDrawer() {
  const { isCartOpen, closeCart, items, removeItem, clearCart } = useCart();

  const handleCheckout = () => {
    alert("✨ Thank you for choosing Ears of Elegance! Our Bespoke Concierge will confirm your limited-edition order via email.");
    clearCart();
    closeCart();
  };

  return (
    <CartDrawer
      isOpen={isCartOpen}
      onClose={closeCart}
      items={items}
      onRemoveItem={removeItem}
      onCheckout={handleCheckout}
    />
  );
}
