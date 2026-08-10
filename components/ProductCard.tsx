// components/ProductCard.tsx
"use client";

import { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { fetchJSON } from "../utils/api";

export interface Product {
  id: string;
  title: string;
  price: number;
  description?: string;
  images?: string[] | string | null;
  inStock?: boolean;
  collectionId?: string;
}

export default function ProductCard({
  product,
  onDelete,
  onUpdate,
  isAdmin = false,
  onQuickView,
  onAddToCart,
}: {
  product: Product;
  onDelete?: (id: string) => void;
  onUpdate?: (updated: Product) => void;
  isAdmin?: boolean;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}) {
  const [price, setPrice] = useState(Number(product.price));
  const [isSaving, setIsSaving] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  const handlePriceBlur = async () => {
    if (price === Number(product.price)) return;
    setIsSaving(true);
    try {
      const updated = await fetchJSON<Product>(`/api/products/${product.id}`, {
        method: "PUT",
        body: JSON.stringify({ ...product, price }),
      });
      onUpdate?.(updated);
    } catch (e) {
      console.error(e);
      setPrice(Number(product.price)); // revert on error
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm(`Delete product "${product.title}"?`)) return;
    try {
      await fetch(`/api/products/${product.id}`, { method: "DELETE" });
      onDelete?.(product.id);
    } catch (e) {
      console.error("Failed to delete product:", e);
    }
  };

  return (
    <div className="group relative bg-[#121212] rounded-sm border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 p-4 shadow-xl hover:shadow-gold transition-all duration-300 flex flex-col justify-between h-full">
      {/* Editorial Image Frame with Zoom */}
      <div>
        <div className="relative overflow-hidden rounded-sm bg-[#0B0B0B] border border-white/5 mb-4">
          <div className="transition-transform duration-500 ease-out group-hover:scale-105">
            <ImageCarousel images={product.images} />
          </div>
          {/* Wishlist Button Badge */}
          {!isAdmin && (
            <button
              onClick={() => setInWishlist(!inWishlist)}
              aria-label="Save to Wishlist"
              className={`absolute top-3 right-3 z-20 h-8 w-8 rounded-full flex items-center justify-center text-xs transition-all ${
                inWishlist
                  ? "bg-gold-gradient text-black shadow-gold font-bold"
                  : "bg-black/60 text-[#FAF9F6] border border-[#D4AF37]/30 hover:bg-[#2E1A47]"
              }`}
            >
              {inWishlist ? "♥" : "♡"}
            </button>
          )}
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-serif uppercase tracking-widest text-[#E5C158]/80 block">
            Limited Edition
          </span>
          <h3
            className="font-serif text-base md:text-lg font-bold text-[#FAF9F6] line-clamp-1 group-hover:text-[#D4AF37] transition-colors"
            title={product.title}
          >
            {product.title}
          </h3>
          {product.description && (
            <p className="text-xs text-[#FAF9F6]/60 line-clamp-2 font-sans">
              {product.description}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-[#D4AF37]/15">
        {isAdmin ? (
          /* ADMIN CONTROLS */
          <div className="flex flex-col w-full gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-serif font-semibold text-[#E5C158]">
                Price ($):
              </label>
              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                  onBlur={handlePriceBlur}
                  disabled={isSaving}
                  className="w-24 rounded border border-[#D4AF37]/40 bg-[#0B0B0B] p-1 text-sm font-semibold text-right text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
                />
                {isSaving && (
                  <span className="text-[10px] text-[#D4AF37]">Saving...</span>
                )}
              </div>
            </div>
            <button
              onClick={handleDelete}
              className="w-full rounded bg-red-600/90 hover:bg-red-700 py-1.5 text-xs font-serif uppercase tracking-wider font-semibold text-white transition"
            >
              Delete Piece
            </button>
          </div>
        ) : (
          /* LUXURY STOREFRONT ACTIONS */
          <div className="flex flex-col space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] font-serif uppercase tracking-widest text-[#FAF9F6]/50">
                Signature Price
              </span>
              <span className="text-lg font-serif font-bold text-gold-gradient">
                ${Number(product.price).toFixed(2)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onQuickView?.(product)}
                className="w-full py-2 px-2 rounded-sm bg-[#2E1A47] hover:bg-[#3B1E54] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#FAF9F6] text-[11px] font-serif uppercase tracking-widest font-semibold transition-all"
              >
                Quick View
              </button>
              <button
                onClick={() => onAddToCart?.(product)}
                className="w-full py-2 px-2 rounded-sm bg-gold-gradient text-black text-[11px] font-serif uppercase tracking-widest font-bold shadow-gold hover:opacity-90 transition-all"
              >
                + Bag
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
