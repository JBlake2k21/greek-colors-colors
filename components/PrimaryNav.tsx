// components/PrimaryNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Collections" },
  { href: "/admin/dashboard", label: "Admin Portal" },
];

export default function PrimaryNav() {
  const pathname = usePathname();
  const { items, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Royal & Gold Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0A1428] via-[#0033A0] to-[#0A1428] border-b border-[#D4AF37]/35 px-4 py-2 text-center text-[10px] md:text-xs font-serif uppercase tracking-[0.25em] text-[#FAF9F6]/90 shadow-sm overflow-hidden">
        <span className="inline-block animate-pulse text-[#FFD700]">
          💙 SIGMA GAMMA RHO COLLECTION • ROYAL BLUE & GOLD LUXURY ACCESSORIES • GREATER SERVICE, GREATER PROGRESS 💛
        </span>
      </div>

      {/* Main Frosted Royal Blue & Obsidian Navbar */}
      <nav className="bg-[#0A1428]/95 backdrop-blur-xl border-b border-[#D4AF37]/30 shadow-2xl px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Left: Navigation Links */}
        <div className="flex items-center space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-serif text-xs md:text-sm uppercase tracking-[0.2em] transition-colors py-1 ${
                  isActive
                    ? "text-gold-gradient font-bold"
                    : "text-[#FAF9F6]/80 hover:text-[#D4AF37]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-gradient shadow-gold"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Center: Brand Logo (Gold Foil & Royal Typography) */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center hidden lg:block">
          <Link
            href="/"
            className="font-serif text-2xl font-extrabold tracking-[0.25em] text-gold-gradient hover:opacity-90 transition block"
          >
            GREEK COLORS
          </Link>
          <span className="text-[9px] font-serif uppercase tracking-[0.3em] text-[#E5C158] block -mt-1">
            Sigma Gamma Rho Sorority, Inc. Edition
          </span>
        </div>

        {/* Right: Bespoke Bag / Cart Drawer Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={openCart}
            aria-label="Open boutique bag"
            className="group relative flex items-center space-x-2 px-4 py-2 rounded-full border border-[#D4AF37]/50 bg-[#0F2142]/90 hover:bg-[#0033A0] hover:border-[#FFD700] transition-all shadow-sm hover:shadow-gold"
          >
            <span className="text-xs font-serif uppercase tracking-widest text-[#FAF9F6] group-hover:text-gold-gradient font-semibold">
              Boutique Bag
            </span>
            <span
              className={`inline-flex items-center justify-center h-5 w-5 rounded-full text-[10px] font-bold ${
                items.length > 0
                  ? "bg-gold-gradient text-black shadow-gold"
                  : "bg-white/10 text-[#FAF9F6]"
              }`}
            >
              {items.length}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
