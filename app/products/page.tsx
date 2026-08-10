// app/products/page.tsx
"use client";

import { useEffect, useState } from "react";
import CollectionCarouselSection from "../../components/CollectionCarouselSection";
import ProductCard, { Product } from "../../components/ProductCard";
import QuickViewModal from "../../components/QuickViewModal";
import { fetchJSON } from "../../utils/api";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";

interface Collection {
  id: string;
  name: string;
  description?: string | null;
  isFeatured?: boolean;
  displayOrder?: number;
  products: Product[];
}

export default function ProductsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const { addItem } = useCart();

  useEffect(() => {
    fetchJSON<Collection[]>("/api/collections")
      .then((data) => {
        setCollections(data || []);
      })
      .catch((e) => {
        console.error("Failed to load collections:", e);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleProductDelete = (id: string) => {
    setCollections((prev) =>
      prev.map((col) => ({
        ...col,
        products: col.products.filter((p) => p.id !== id),
      }))
    );
  };

  const handleProductUpdate = (updated: Product) => {
    setCollections((prev) =>
      prev.map((col) => ({
        ...col,
        products: col.products.map((p) => (p.id === updated.id ? updated : p)),
      }))
    );
  };

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  const displayedCollections =
    selectedCategory === "all"
      ? collections
      : selectedCategory === "featured"
      ? collections.filter((col) => col.isFeatured)
      : collections.filter((col) => col.id === selectedCategory);

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#FAF9F6] py-12 px-6 sm:px-12">
      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={quickViewProduct}
        onAddToCart={handleAddToCart}
      />

      <div className="max-w-7xl mx-auto">
        {/* Editorial Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="text-xs font-serif uppercase tracking-[0.35em] text-[#E5C158] block mb-2">
            Signature Catalogs
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-widest text-gold-gradient uppercase mb-4">
            DESIGNS BY ROSLYN KISER MILLER
          </h1>
          <p className="text-[#FAF9F6]/70 font-sans max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover our bespoke jewelry collections. Each limited-edition
            category is crafted with unmatched artistry, ethically sourced diamonds,
            and royal elegance.
          </p>
        </motion.div>

        {/* Category Navigation Pills */}
        {!loading && collections.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2.5 rounded-full text-xs font-serif uppercase tracking-widest transition-all ${
                selectedCategory === "all"
                  ? "bg-gold-gradient text-black font-bold shadow-gold"
                  : "bg-[#121212] text-[#FAF9F6] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#2E1A47]"
              }`}
            >
              All Collections ({collections.length})
            </button>
            {collections.some((c) => c.isFeatured) && (
              <button
                onClick={() => setSelectedCategory("featured")}
                className={`px-6 py-2.5 rounded-full text-xs font-serif uppercase tracking-widest transition-all ${
                  selectedCategory === "featured"
                    ? "bg-gold-gradient text-black font-bold shadow-gold"
                    : "bg-[#121212] text-[#E5C158] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#2E1A47]"
                }`}
              >
                ★ Prominent Showcases ({collections.filter((c) => c.isFeatured).length})
              </button>
            )}
            {collections.map((col) => (
              <button
                key={col.id}
                onClick={() => setSelectedCategory(col.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-serif uppercase tracking-widest transition-all ${
                  selectedCategory === col.id
                    ? "bg-gold-gradient text-black font-bold shadow-gold"
                    : "bg-[#121212] text-[#FAF9F6] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#2E1A47]"
                }`}
              >
                {col.name} ({col.products?.length || 0})
              </button>
            ))}
          </motion.div>
        )}

        {/* Collections Display */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <span className="inline-block h-8 w-8 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin mb-4"></span>
            <p className="text-sm font-serif tracking-widest uppercase text-[#FAF9F6]/60 animate-pulse">
              Unveiling Designs by Roslyn Kiser Miller…
            </p>
          </div>
        ) : displayedCollections.length === 0 ? (
          <div className="text-center py-24 glass-obsidian rounded-2xl p-8 border border-[#D4AF37]/20">
            <p className="text-lg font-serif text-[#FAF9F6] mb-2">
              No bespoke collections found in this category.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12"
          >
            {displayedCollections.map((collection) => (
              <CollectionCarouselSection
                key={collection.id}
                collection={collection}
                onDelete={handleProductDelete}
                onUpdate={handleProductUpdate}
                isAdmin={false}
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
              />
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}
