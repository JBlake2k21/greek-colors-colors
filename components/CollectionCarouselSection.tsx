// components/CollectionCarouselSection.tsx
"use client";

import { useRef } from "react";
import ProductCard, { Product } from "./ProductCard";

interface Collection {
  id: string;
  name: string;
  description?: string | null;
  isFeatured?: boolean;
  displayOrder?: number;
  products: Product[];
}

interface CollectionCarouselSectionProps {
  collection: Collection;
  onDelete?: (id: string) => void;
  onUpdate?: (updated: Product) => void;
  isAdmin?: boolean;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onToggleFeatured?: (id: string, current: boolean) => void;
  onMoveOrder?: (id: string, direction: "up" | "down") => void;
  onDeleteCollection?: (id: string) => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function CollectionCarouselSection({
  collection,
  onDelete,
  onUpdate,
  isAdmin = false,
  onQuickView,
  onAddToCart,
  onToggleFeatured,
  onMoveOrder,
  onDeleteCollection,
  isFirst = false,
  isLast = false,
}: CollectionCarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!collection.products || collection.products.length === 0) {
    return null;
  }

  return (
    <section
      className={`mb-20 pb-8 last:mb-10 transition-all ${
        collection.isFeatured
          ? "p-6 rounded-sm bg-gradient-to-r from-[#1D0B2E]/60 via-[#121212] to-[#0B0B0B] border border-[#D4AF37]/40 shadow-2xl"
          : ""
      }`}
    >
      {/* Admin Prominence & Archive Management Toolbar */}
      {isAdmin && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 py-3 px-5 rounded-sm bg-[#141414] border border-[#D4AF37]/30 shadow-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                onToggleFeatured?.(
                  collection.id,
                  Boolean(collection.isFeatured)
                )
              }
              className={`px-4 py-1.5 rounded-sm text-[11px] font-serif uppercase tracking-widest font-bold transition-all shadow-md ${
                collection.isFeatured
                  ? "bg-gold-gradient text-black shadow-gold scale-105"
                  : "bg-[#1D0B2E] border border-[#D4AF37]/40 text-[#E5C158] hover:bg-[#2E1A47]"
              }`}
            >
              {collection.isFeatured
                ? "★ SHOWCASE PROMINENTLY (ACTIVE)"
                : "☆ SET AS PROMINENT SHOWCASE"}
            </button>
            <span className="text-[10px] font-mono text-[#FAF9F6]/50 uppercase">
              Priority Order: #{collection.displayOrder ?? 0}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onMoveOrder?.(collection.id, "up")}
              disabled={isFirst}
              title="Move Priority Up"
              className={`px-3 py-1 rounded-sm border text-xs font-serif ${
                isFirst
                  ? "border-[#FAF9F6]/10 text-[#FAF9F6]/20 cursor-not-allowed"
                  : "border-[#D4AF37]/40 bg-[#121212] hover:bg-[#2E1A47] text-[#FAF9F6] shadow-sm hover:border-[#D4AF37]"
              }`}
            >
              ↑ Priority
            </button>
            <button
              onClick={() => onMoveOrder?.(collection.id, "down")}
              disabled={isLast}
              title="Move Priority Down"
              className={`px-3 py-1 rounded-sm border text-xs font-serif ${
                isLast
                  ? "border-[#FAF9F6]/10 text-[#FAF9F6]/20 cursor-not-allowed"
                  : "border-[#D4AF37]/40 bg-[#121212] hover:bg-[#2E1A47] text-[#FAF9F6] shadow-sm hover:border-[#D4AF37]"
              }`}
            >
              ↓ Priority
            </button>
            <button
              onClick={() => {
                if (
                  confirm(
                    `Are you sure you want to delete the "${collection.name}" archive and all its pieces?`
                  )
                ) {
                  onDeleteCollection?.(collection.id);
                }
              }}
              className="ml-2 px-3 py-1 rounded-sm bg-red-950/50 border border-red-500/40 text-red-300 hover:bg-red-900/60 text-xs font-serif uppercase tracking-wider transition"
            >
              🗑 Archive Line
            </button>
          </div>
        </div>
      )}

      {/* Luxury Carousel Header with Dynamic Gold Line */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-baseline space-x-4">
          <h2
            className={`font-serif text-2xl md:text-4xl font-bold tracking-widest uppercase ${
              collection.isFeatured
                ? "text-gold-gradient drop-shadow"
                : "text-[#FAF9F6]"
            }`}
          >
            {collection.name}
          </h2>
          {collection.isFeatured && (
            <span className="inline-block px-3 py-0.5 rounded-full bg-gold-gradient text-black font-serif text-[10px] font-extrabold uppercase tracking-[0.25em] shadow-gold animate-pulse">
              ✦ PROMINENT SHOWCASE
            </span>
          )}
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded border border-[#D4AF37]/30 text-[10px] font-serif uppercase tracking-widest text-[#E5C158] bg-[#1D0B2E]">
            {collection.products.length}{" "}
            {collection.products.length === 1 ? "Piece" : "Pieces"}
          </span>
        </div>

        {/* Dynamic Gold Divider Line extending across the screen */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37]/20 to-transparent mx-6 hidden md:block"></div>

        {/* Circular Gold Scroll Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => scroll("left")}
            aria-label={`Scroll ${collection.name} left`}
            className="h-10 w-10 rounded-full border border-[#D4AF37]/40 bg-[#121212] hover:bg-[#2E1A47] hover:border-[#D4AF37] text-[#FAF9F6] flex items-center justify-center transition-all shadow-md hover:shadow-gold"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label={`Scroll ${collection.name} right`}
            className="h-10 w-10 rounded-full border border-[#D4AF37]/40 bg-[#121212] hover:bg-[#2E1A47] hover:border-[#D4AF37] text-[#FAF9F6] flex items-center justify-center transition-all shadow-md hover:shadow-gold"
          >
            ›
          </button>
        </div>
      </div>

      {collection.description && (
        <p className="text-xs text-[#FAF9F6]/60 font-sans max-w-2xl mb-6 -mt-4">
          {collection.description}
        </p>
      )}

      {/* Horizontal Pieces Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {collection.products.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] md:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start"
          >
            <ProductCard
              product={product}
              onDelete={onDelete}
              onUpdate={onUpdate}
              isAdmin={isAdmin}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
