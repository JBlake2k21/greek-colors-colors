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
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Luxury Quick View Glass Modal */}
      <div className="relative z-10 w-full max-w-3xl glass-luxury rounded-2xl overflow-hidden shadow-2xl border-[0.5px] border-[#CCA147]/50 bg-[#001B55]/95 text-[#FCFFFE]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-20 h-10 w-10 rounded-full border border-[#CCA147]/60 bg-[#001B55] hover:bg-[#002677] text-white flex items-center justify-center transition"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Carousel */}
          <div className="bg-[#001440] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#CCA147]/30">
            <div className="w-full">
              <ImageCarousel images={product.images} />
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-serif uppercase tracking-widest text-[#E7CA83] block mb-1 font-semibold">
                Greek Colors Colors • Official Selection
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-[#FCFFFE]">
                {product.title}
              </h2>

              <div className="mt-4 flex items-baseline space-x-3">
                <span className="text-2xl font-bold text-[#CCA147] font-serif">
                  ${Number(product.price).toFixed(2)}
                </span>
                <span className="text-xs text-[#FCFFFE]/70 uppercase tracking-wider">
                  ✦ Insured Shipping
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-[#CCA147]/30">
                <h4 className="text-xs font-serif uppercase tracking-widest text-[#CCA147] mb-2 font-semibold">
                  Craftsmanship & Details
                </h4>
                <p className="text-xs text-[#FCFFFE]/85 leading-relaxed font-sans">
                  {product.description ||
                    "Handcrafted sorority accessory piece designed in official Royal Blue (#003399) and Gold (#CCA147). Each piece comes with an authenticated certificate of distinction."}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-[11px] text-[#FCFFFE]/80 font-sans">
                <div className="p-2.5 rounded bg-[#002677] border border-[#CCA147]/30">
                  <span className="block font-semibold text-[#E7CA83]">✦ Authenticity</span>
                  Certified Original
                </div>
                <div className="p-2.5 rounded bg-[#002677] border border-[#CCA147]/30">
                  <span className="block font-semibold text-[#E7CA83]">✦ Delivery</span>
                  Worldwide Insured
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-[#CCA147]/30 flex items-center space-x-3">
              <button
                onClick={() => {
                  onAddToCart?.(product);
                  onClose();
                }}
                className="flex-1 py-3.5 rounded bg-[#CCA147] text-[#001B55] font-serif font-bold text-xs uppercase tracking-widest shadow-gold hover:bg-[#E7CA83] transition"
              >
                Add to Boutique Bag
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3.5 rounded border border-[#CCA147]/50 bg-[#002677] hover:bg-[#003399] text-[#FCFFFE] text-xs font-serif uppercase tracking-widest transition"
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
