// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CollectionCarouselSection from "../components/CollectionCarouselSection";
import QuickViewModal from "../components/QuickViewModal";
import { Product } from "../components/ProductCard";
import { fetchJSON } from "../utils/api";
import { useCart } from "../context/CartContext";
import DesignerBioPopover from "../components/DesignerBioPopover";

interface Collection {
  id: string;
  name: string;
  description?: string | null;
  isFeatured?: boolean;
  displayOrder?: number;
  products: Product[];
}

export default function Home() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [badgeHoverState, setBadgeHoverState] = useState<{
    isHovered: boolean;
    pos?: { x: number; y: number };
  }>({ isHovered: false });

  const { addItem } = useCart();

  useEffect(() => {
    fetchJSON<Collection[]>("/api/collections")
      .then((data) => {
        setCollections(data || []);
      })
      .catch((e) => {
        console.error("Failed to load collections on homepage:", e);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-[#FAF9F6] overflow-x-hidden">
      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={quickViewProduct}
        onAddToCart={handleAddToCart}
      />

      {/* Royal Blue & Gold Sigma Gamma Rho Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-b from-[#0A1428] via-[#080B10] to-[#080B10] border-b border-[#D4AF37]/30">
        {/* Editorial Designer Portrait Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-end items-center">
          <div className="relative w-full md:w-[70%] lg:w-[55%] h-full opacity-90 hover:opacity-100 transition-opacity duration-1000">
            <Image
              src="/roslyn-miller.jpg"
              alt="Roslyn Kiser Miller - Master Designer & Jeweler"
              fill
              priority
              className="object-contain object-right md:object-center transition-transform duration-1000 scale-100 hover:scale-105"
            />
            {/* Left side feathering with deep royal gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428] via-[#080B10]/80 via-30% to-transparent" />
            {/* Gold lighting overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFD700]/10 to-transparent" />
          </div>
        </div>

        {/* Decorative Royal Blue & Gold Glow Circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0033A0]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#0F2142]/80 backdrop-blur-md"
          >
            <span className="text-gold-gradient font-serif text-[11px] uppercase tracking-[0.35em]">
              💙 SIGMA GAMMA RHO SORORITY, INC. EDITION • 2026 COLLECTION 💛
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest text-gold-gradient uppercase leading-tight"
          >
            GREATER SERVICE, GREATER PROGRESS. ELEGANCE IN ROYAL BLUE & GOLD.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-[#FAF9F6]/85 font-sans text-sm sm:text-lg leading-relaxed"
          >
            Bespoke sorority jewelry, handcrafted royal blue and gold accessories, and signature keepsakes. Honor your legacy with limited-edition designs crafted for distinction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto px-10 py-4 rounded-sm bg-gold-gradient text-black font-serif text-xs font-bold uppercase tracking-[0.25em] shadow-gold hover:opacity-95 transition-all"
            >
              Explore Greek Collections
            </Link>
            <Link
              href="#featured-collections"
              className="w-full sm:w-auto px-10 py-4 rounded-sm border border-[#D4AF37]/40 bg-[#0F2142]/80 hover:bg-[#0033A0] text-[#FAF9F6] font-serif text-xs uppercase tracking-[0.25em] transition-all"
            >
              Preview Sorority Pieces
            </Link>
          </motion.div>
        </div>

        {/* Radial Gold Illumination */}
        {badgeHoverState.isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `radial-gradient(circle 450px at 75% 85%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)`,
            }}
          />
        )}

        {/* Designer Biography Popover */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-6 right-6 z-30 flex"
        >
          <DesignerBioPopover
            onHoverChange={(isHovered, pos) =>
              setBadgeHoverState({ isHovered, pos })
            }
          />
        </motion.div>
      </section>

      {/* Heritage & Master Designer Section */}
      <section
        id="about"
        className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#080B10] via-[#0A1428]/60 to-[#080B10] border-b border-[#D4AF37]/20 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(0,51,160,0.4)]">
              <Image
                src="/roslyn-miller.jpg"
                alt="Roslyn Kiser Miller"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 right-4 bg-[#0A1428] border border-[#D4AF37] px-4 py-1.5 rounded-full shadow-lg">
              <span className="text-[10px] font-serif text-[#FFD700] uppercase tracking-widest font-bold">
                ΣΓΡ • Sisterhood • Scholarship • Service
              </span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#E5C158] block mb-2 font-bold">
                Master Craftsmanship & Sorority Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-wider text-gold-gradient uppercase leading-tight">
                ROSLYN KISER MILLER
              </h2>
              <p className="text-xs font-sans text-[#D4AF37] uppercase tracking-[0.2em] mt-1">
                Founder • Master Jeweler • Proud Sigma Gamma Rho Soror
              </p>
            </div>

            <p className="text-sm text-[#FAF9F6]/85 font-sans leading-relaxed">
              Roslyn Kiser Miller brings master craftsmanship and deep sisterhood allegiance to Greek Colors. Celebrating the rich legacy of Sigma Gamma Rho Sorority, Inc., her handcrafted Royal Blue and Gold collections reflect a commitment to elegance, distinction, and sisterhood.
            </p>

            <blockquote className="border-l-2 border-[#FFD700] pl-4 py-1 italic font-serif text-sm text-[#FAF9F6]/90">
              &ldquo;Greater service, greater progress. Every piece is designed to reflect the beauty of our sisterhood and the timeless pride of Royal Blue & Gold.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Greek Colors Distinction */}
      <section className="py-20 px-6 md:px-12 bg-[#080B10] border-b border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="glass-obsidian p-8 rounded-lg border border-[#D4AF37]/20 space-y-3 hover:border-[#0033A0] transition-colors">
            <span className="text-2xl block text-[#E5C158]">💙 01</span>
            <h3 className="font-serif text-lg font-bold tracking-wider text-[#FAF9F6]">
              ROYAL BLUE & GOLD EXCLUSIVITY
            </h3>
            <p className="text-xs text-[#FAF9F6]/75 leading-relaxed font-sans">
              Hand-selected pearls, custom blue stones, and 18k gold plating designed specifically for Sigma Gamma Rho Sorors.
            </p>
          </div>

          <div className="glass-obsidian p-8 rounded-lg border border-[#D4AF37]/20 space-y-3 hover:border-[#0033A0] transition-colors">
            <span className="text-2xl block text-[#E5C158]">💛 02</span>
            <h3 className="font-serif text-lg font-bold tracking-wider text-[#FAF9F6]">
              BESPOKE HERITAGE DESIGN
            </h3>
            <p className="text-xs text-[#FAF9F6]/75 leading-relaxed font-sans">
              Crafted in limited runs for conventions, line gifts, chartering celebrations, and everyday royal elegance.
            </p>
          </div>

          <div className="glass-obsidian p-8 rounded-lg border border-[#D4AF37]/20 space-y-3 hover:border-[#0033A0] transition-colors">
            <span className="text-2xl block text-[#E5C158]">👑 03</span>
            <h3 className="font-serif text-lg font-bold tracking-wider text-[#FAF9F6]">
              SORORITY VIP CONCIERGE
            </h3>
            <p className="text-xs text-[#FAF9F6]/75 leading-relaxed font-sans">
              Complimentary insured shipping, group chapter discounts, and dedicated custom order support.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections Showcase */}
      <section
        id="featured-collections"
        className="py-24 px-6 sm:px-12 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#E5C158] block mb-2">
            The 2026 Sorority Archive
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-widest text-gold-gradient uppercase">
            SIGNATURE GREEK COLLECTIONS
          </h2>
          <div className="mt-4 mx-auto w-24 h-[1px] bg-gold-gradient"></div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="inline-block h-8 w-8 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin mb-3"></span>
            <p className="text-xs font-serif tracking-widest uppercase text-[#FAF9F6]/60 animate-pulse">
              Curating Greek archive pieces…
            </p>
          </div>
        ) : collections.length === 0 ? (
          <div className="text-center py-16 text-xs text-[#FAF9F6]/50 font-sans">
            No archive collections currently available.
          </div>
        ) : (
          <div className="space-y-12">
            {collections.some((c) => c.isFeatured) && (
              <div className="p-4 mb-8 rounded-sm bg-gradient-to-r from-[#0A1428] via-[#0F2142] to-[#080B10] border border-[#D4AF37]/50 flex items-center justify-between shadow-xl">
                <span className="text-xs font-serif uppercase tracking-widest text-gold-gradient font-bold">
                  ★ ROYAL BLUE & GOLD FEATURED SELECTIONS
                </span>
                <span className="text-[10px] font-mono uppercase text-[#E5C158]">
                  {collections.filter((c) => c.isFeatured).length} Featured{" "}
                  {collections.filter((c) => c.isFeatured).length === 1
                    ? "Collection"
                    : "Collections"}
                </span>
              </div>
            )}

            {collections.slice(0, 4).map((collection) => (
              <CollectionCarouselSection
                key={collection.id}
                collection={collection}
                isAdmin={false}
                onQuickView={handleQuickView}
                onAddToCart={handleAddToCart}
              />
            ))}
            <div className="text-center pt-8">
              <Link
                href="/products"
                className="inline-block px-12 py-4 rounded-sm border border-[#D4AF37]/50 bg-[#0A1428] hover:bg-[#0033A0] text-gold-gradient font-serif font-bold text-xs uppercase tracking-[0.25em] transition shadow-md hover:shadow-gold"
              >
                View All {collections.length} Collections →
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
