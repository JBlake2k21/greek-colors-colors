// store/cartStore.ts
import create from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string; // first image URL
  quantity: number;
}

export type CartState = {
  items: Record<string, CartItem>;
  /** Add an item; if already in cart, increase quantity */
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  /** Remove item completely */
  removeItem: (id: string) => void;
  /** Update quantity (set) */
  updateQuantity: (id: string, quantity: number) => void;
  /** Compute total price */
  total: () => number;
  /** Empty the cart */
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},
      addItem: (item, qty = 1) => {
        const existing = get().items[item.id];
        const newQty = existing ? existing.quantity + qty : qty;
        set(state => ({
          items: {
            ...state.items,
            [item.id]: { ...item, quantity: newQty },
          },
        }));
      },
      removeItem: id => {
        set(state => {
          const newItems = { ...state.items };
          delete newItems[id];
          return { items: newItems };
        });
      },
      updateQuantity: (id, quantity) => {
        set(state => ({
          items: {
            ...state.items,
            [id]: { ...state.items[id], quantity },
          },
        }));
      },
      total: () => {
        const items = Object.values(get().items);
        return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
      },
      clear: () => set({ items: {} }),
    }),
    { name: "cart-storage" }
  )
);
