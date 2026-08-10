// context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../components/ProductCard";

interface CartContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("earsofelegance_cart");
      if (saved) {
        try {
          setItems(JSON.parse(saved));
        } catch {}
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("earsofelegance_cart", JSON.stringify(items));
    }
  }, [items]);

  const addItem = (product: Product) => {
    setItems((prev) => [...prev, product]);
    setIsCartOpen(true); // Auto-open cart drawer on item added
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const total = items.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
