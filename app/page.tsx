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
    <div className="min-h-screen bg-[#001B55] text-[#FCFFFE] overflow-x-hidden">
      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={quickViewProduct}
        onAddToCart={handleAddToCart}
      />

      {/* Royal Blue & Gold Sigma Gamma Rho Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-b from-[#001B55] via-[#003399] to-[#001B55] border-b border-[#CCA147]/40">
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#001B55] via-[#003399]/80 via-35% to-transparent" />
            {/* Gold lighting overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#CCA147]/20 to-transparent" />
          </div>
        </div>

        {/* Decorative Royal Blue & Gold Glow Circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#003399]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#CCA147]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#CCA147]/50 bg-[#001B55]/90 backdrop-blur-md"
          >
            <span className="text-[#E7CA83] font-serif text-[11px] uppercase tracking-[0.35em] font-bold">
              💙 SIGMA GAMMA RHO SORORITY, INC. OFFICIAL COLLECTION • 2026 RELEASE 💛
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest text-[#CCA147] uppercase leading-tight drop-shadow-lg"
          >
            GREATER SERVICE, GREATER PROGRESS. ELEGANCE IN ROYAL BLUE & GOLD.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-[#FCFFFE] font-sans text-sm sm:text-lg leading-relaxed drop-shadow"
          >
            Bespoke sorority jewelry, handcrafted royal blue (#003399) and gold (#CCA147) accessories, and signature keepsakes designed for distinction by Greek Colors Colors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto px-10 py-4 rounded-sm bg-[#CCA147] text-[#001B55] font-serif text-xs font-bold uppercase tracking-[0.25em] shadow-gold hover:bg-[#E7CA83] transition-all"
            >
              Explore Greek Collections
            </Link>
            <Link
              href="#featured-collections"
              className="w-full sm:w-auto px-10 py-4 rounded-sm border border-[#CCA147]/50 bg-[#003399]/90 hover:bg-[#002677] text-[#FCFFFE] font-serif text-xs uppercase tracking-[0.25em] transition-all"
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
              background: `radial-gradient(circle 450px at 75% 85%, rgba(204, 161, 71, 0.25) 0%, transparent 70%)`,
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
        className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#001B55] via-[#003399]/70 to-[#001B55] border-b border-[#CCA147]/30 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[#CCA147] shadow-[0_0_50px_rgba(204,161,71,0.5)]">
              <Image
                src="/roslyn-miller.jpg"
                alt="Roslyn Kiser Miller"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 right-4 bg-[#001B55] border border-[#CCA147] px-4 py-1.5 rounded-full shadow-lg">
              <span className="text-[10px] font-serif text-[#E7CA83] uppercase tracking-widest font-bold">
                ΣΓΡ • Sisterhood • Scholarship • Service
              </span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#E7CA83] block mb-2 font-bold">
                Master Craftsmanship & Sorority Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-wider text-[#CCA147] uppercase leading-tight">
                ROSLYN KISER MILLER
              </h2>
              <p className="text-xs font-sans text-[#E7CA83] uppercase tracking-[0.2em] mt-1 font-semibold">
                Founder • Master Jeweler • Proud Sigma Gamma Rho Soror
              </p>
            </div>

            <p className="text-sm text-[#FCFFFE] font-sans leading-relaxed">
              Roslyn Kiser Miller brings master craftsmanship and deep sisterhood allegiance to Greek Colors Colors. Celebrating the rich legacy of Sigma Gamma Rho Sorority, Inc., her handcrafted Royal Blue (#003399) and Gold (#CCA147) collections reflect a commitment to elegance, distinction, and sisterhood.
            </p>

            <blockquote className="border-l-2 border-[#CCA147] pl-4 py-1 italic font-serif text-sm text-[#E7CA83]">
              &ldquo;Greater service, greater progress. Every piece is designed to reflect the beauty of our sisterhood and the timeless pride of Royal Blue & Gold.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Greek Colors Colors Distinction */}
      <section className="py-20 px-6 md:px-12 bg-[#001B55] border-b border-[#CCA147]/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[#002677]/80 p-8 rounded-lg border border-[#CCA147]/40 space-y-3 hover:border-[#E7CA83] transition-colors shadow-lg">
            <span className="text-2xl block text-[#E7CA83]">💙 01</span>
            <h3 className="font-serif text-lg font-bold tracking-wider text-[#FCFFFE]">
              ROYAL BLUE & GOLD EXCLUSIVITY
            </h3>
            <p className="text-xs text-[#FCFFFE]/90 leading-relaxed font-sans">
              Hand-selected pearls, custom blue stones, and gold plating designed specifically for Sigma Gamma Rho Sorors.
            </p>
          </div>

          <div className="bg-[#002677]/80 p-8 rounded-lg border border-[#CCA147]/40 space-y-3 hover:border-[#E7CA83] transition-colors shadow-lg">
            <span className="text-2xl block text-[#E7CA83]">💛 02</span>
            <h3 className="font-serif text-lg font-bold tracking-wider text-[#FCFFFE]">
              BESPOKE HERITAGE DESIGN
            </h3>
            <p className="text-xs text-[#FCFFFE]/90 leading-relaxed font-sans">
              Crafted in limited runs for conventions, line gifts, chartering celebrations, and everyday royal elegance.
            </p>
          </div>

          <div className="bg-[#002677]/80 p-8 rounded-lg border border-[#CCA147]/40 space-y-3 hover:border-[#E7CA83] transition-colors shadow-lg">
            <span className="text-2xl block text-[#E7CA83]">👑 03</span>
            <h3 className="font-serif text-lg font-bold tracking-wider text-[#FCFFFE]">
              SORORITY VIP CONCIERGE
            </h3>
            <p className="text-xs text-[#FCFFFE]/90 leading-relaxed font-sans">
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
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#E7CA83] block mb-2 font-bold">
            The 2026 Sorority Archive
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-widest text-[#CCA147] uppercase">
            SIGNATURE GREEK COLLECTIONS
          </h2>
          <div className="mt-4 mx-auto w-24 h-[2px] bg-gradient-to-r from-[#CCA147] via-[#E7CA83] to-[#CCA147]"></div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <span className="inline-block h-8 w-8 rounded-full border-2 border-[#CCA147] border-t-transparent animate-spin mb-3"></span>
            <p className="text-xs font-serif tracking-widest uppercase text-[#FCFFFE]/70 animate-pulse">
              Curating Greek archive pieces…
            </p>
          </div>
        ) : collections.length === 0 ? (
          <div className="text-center py-16 text-xs text-[#FCFFFE]/60 font-sans">
            No archive collections currently available.
          </div>
        ) : (
          <div className="space-y-12">
            {collections.some((c) => c.isFeatured) && (
              <div className="p-4 mb-8 rounded-sm bg-gradient-to-r from-[#001B55] via-[#003399] to-[#001B55] border border-[#CCA147]/60 flex items-center justify-between shadow-xl">
                <span className="text-xs font-serif uppercase tracking-widest text-[#CCA147] font-bold">
                  ★ ROYAL BLUE & GOLD FEATURED SELECTIONS
                </span>
                <span className="text-[10px] font-mono uppercase text-[#E7CA83] font-bold">
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
                className="inline-block px-12 py-4 rounded-sm border border-[#CCA147]/60 bg-[#003399] hover:bg-[#002677] text-[#CCA147] hover:text-[#E7CA83] font-serif font-bold text-xs uppercase tracking-[0.25em] transition shadow-md hover:shadow-gold"
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
