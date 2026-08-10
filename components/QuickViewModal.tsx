// components/QuickViewModal.tsx
"use client";

import { useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import { Product } from "./ProductCard";

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart?: (product: Product) => void;
}

export default function QuickViewModal({
  isOpen,
  onClose,
  product,
  onAddToCart,
}: QuickViewModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Luxury Quick View Glass Modal */}
      <div className="relative z-10 w-full max-w-3xl glass-luxury rounded-2xl overflow-hidden shadow-2xl border-[0.5px] border-[#D4AF37]/30 bg-[#1D0B2E]/90 text-[#FAF9F6]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 h-10 w-10 rounded-full border border-[#D4AF37]/40 bg-black/50 hover:bg-[#2E1A47] text-white flex items-center justify-center transition"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Carousel */}
          <div className="bg-[#0B0B0B] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#D4AF37]/20">
            <div className="w-full">
              <ImageCarousel images={product.images} />
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-serif uppercase tracking-widest text-[#E5C158] block mb-1">
                Ears of Elegance • Limited Edition
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-foreground">
                {product.title}
              </h2>

              <div className="mt-4 flex items-baseline space-x-3">
                <span className="text-2xl font-bold text-gold-gradient font-serif">
                  ${Number(product.price).toFixed(2)}
                </span>
                <span className="text-xs text-[#FAF9F6]/60 uppercase tracking-wider">
                  ✦ Insured Shipping
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-[#D4AF37]/20">
                <h4 className="text-xs font-serif uppercase tracking-widest text-[#D4AF37] mb-2 font-semibold">
                  Craftsmanship & Details
                </h4>
                <p className="text-xs text-[#FAF9F6]/80 leading-relaxed font-sans">
                  {product.description ||
                    "Handcrafted jewelry piece designed with bespoke precious metals and curated gems. Each limited-edition piece comes with an authenticated certificate of origin."}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-[11px] text-[#FAF9F6]/70 font-sans">
                <div className="p-2.5 rounded bg-[#121212] border border-[#D4AF37]/20">
                  <span className="block font-semibold text-[#E5C158]">✦ Authenticity</span>
                  Certified Original
                </div>
                <div className="p-2.5 rounded bg-[#121212] border border-[#D4AF37]/20">
                  <span className="block font-semibold text-[#E5C158]">✦ Delivery</span>
                  Worldwide Insured
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center space-x-3">
              <button
                onClick={() => {
                  onAddToCart?.(product);
                  onClose();
                }}
                className="flex-1 py-3.5 rounded bg-gold-gradient text-black font-serif font-bold text-xs uppercase tracking-widest shadow-gold hover:opacity-95 transition"
              >
                Add to Bespoke Bag
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3.5 rounded border border-[#D4AF37]/40 bg-[#2E1A47] hover:bg-[#3B1E54] text-[#FAF9F6] text-xs font-serif uppercase tracking-widest transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
