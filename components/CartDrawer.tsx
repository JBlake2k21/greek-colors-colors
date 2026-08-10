// components/CartDrawer.tsx
"use client";

import { useEffect } from "react";
import { Product } from "./ProductCard";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-Over Cart Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-[#D4AF37]/30 text-[#FAF9F6] shadow-2xl flex flex-col justify-between p-6 md:p-8 backdrop-blur-2xl">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
              <div>
                <h2 className="font-serif text-2xl font-bold tracking-wider text-gold-gradient">
                  YOUR BAG
                </h2>
                <p className="text-xs text-[#FAF9F6]/60 font-sans mt-0.5">
                  {items.length} {items.length === 1 ? "piece" : "pieces"} selected
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close Bag"
                className="h-9 w-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#FAF9F6] hover:bg-[#2E1A47] hover:border-[#D4AF37] transition"
              >
                ✕
              </button>
            </div>

            {/* Item List */}
            <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1 no-scrollbar">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <span className="text-3xl block mb-3 opacity-40">✦</span>
                  <p className="text-sm font-serif text-[#FAF9F6]/60">
                    Your luxury jewelry bag is empty.
                  </p>
                  <p className="text-xs text-[#FAF9F6]/40 mt-1 font-sans">
                    Explore our bespoke collections to select a piece.
                  </p>
                </div>
              ) : (
                items.map((item, idx) => {
                  let thumb = "";
                  if (typeof item.images === "string") {
                    try {
                      const p = JSON.parse(item.images);
                      thumb = Array.isArray(p) ? p[0] : item.images;
                    } catch {
                      thumb = item.images;
                    }
                  } else if (Array.isArray(item.images)) {
                    thumb = item.images[0] || "";
                  }
                  return (
                    <div
                      key={`${item.id}-${idx}`}
                      className="flex items-center justify-between bg-[#18181B] border border-[#D4AF37]/20 rounded-lg p-3 hover:border-[#D4AF37]/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        {thumb && (
                          <img
                            src={thumb}
                            alt={item.title}
                            className="h-14 w-14 object-cover rounded border border-[#D4AF37]/20"
                          />
                        )}
                        <div>
                          <h4 className="text-sm font-serif font-bold text-[#FAF9F6] line-clamp-1">
                            {item.title}
                          </h4>
                          <span className="text-xs font-semibold text-[#E5C158] block mt-0.5 font-sans">
                            ${Number(item.price).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        aria-label="Remove item"
                        className="text-xs text-[#FAF9F6]/50 hover:text-red-400 p-2 transition font-sans"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Footer & Checkout CTA */}
          <div className="pt-6 border-t border-[#D4AF37]/20 space-y-4">
            <div className="flex items-center justify-between text-sm font-serif">
              <span className="text-[#FAF9F6]/70 uppercase tracking-widest">
                Estimated Total
              </span>
              <span className="text-xl font-bold text-gold-gradient">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="text-[11px] text-[#FAF9F6]/50 font-sans text-center">
              Complimentary Worldwide Insured Delivery & Authenticity Certificate Included.
            </p>
            <button
              onClick={onCheckout}
              disabled={items.length === 0}
              className="w-full py-4 rounded bg-gold-gradient text-black font-serif font-bold tracking-widest text-sm uppercase shadow-gold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Proceed to Bespoke Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
