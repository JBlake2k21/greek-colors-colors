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
      {/* Royal Blue & Gold Announcement Bar */}
      <div className="bg-gradient-to-r from-[#001B55] via-[#003399] to-[#001B55] border-b border-[#CCA147]/40 px-4 py-2 text-center text-[10px] md:text-xs font-serif uppercase tracking-[0.25em] text-[#FCFFFE] shadow-sm overflow-hidden">
        <span className="inline-block animate-pulse text-[#E7CA83]">
          💙 SIGMA GAMMA RHO SORORITY, INC. OFFICIAL COLLECTION • ROYAL BLUE & GOLD ACCESSORIES • GREATER SERVICE, GREATER PROGRESS 💛
        </span>
      </div>

      {/* Main Frosted Royal Blue Navbar */}
      <nav className="bg-[#001B55]/95 backdrop-blur-xl border-b border-[#CCA147]/35 shadow-2xl px-6 md:px-12 py-5 flex items-center justify-between">
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
                    ? "text-[#CCA147] font-bold"
                    : "text-[#FCFFFE]/90 hover:text-[#E7CA83]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#CCA147] via-[#E7CA83] to-[#CCA147] shadow-gold"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Center: Brand Logo (Gold Foil Typography) */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center hidden lg:block">
          <Link
            href="/"
            className="font-serif text-2xl font-extrabold tracking-[0.25em] text-[#CCA147] hover:text-[#E7CA83] transition block drop-shadow-md"
          >
            GREEK COLORS COLORS
          </Link>
          <span className="text-[9px] font-serif uppercase tracking-[0.3em] text-[#E7CA83] block -mt-1 font-semibold">
            Sigma Gamma Rho Sorority, Inc.
          </span>
        </div>

        {/* Right: Boutique Bag Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={openCart}
            aria-label="Open boutique bag"
            className="group relative flex items-center space-x-2 px-4 py-2 rounded-full border border-[#CCA147]/60 bg-[#003399]/80 hover:bg-[#003399] hover:border-[#E7CA83] transition-all shadow-md hover:shadow-gold"
          >
            <span className="text-xs font-serif uppercase tracking-widest text-[#FCFFFE] group-hover:text-[#E7CA83] font-semibold">
              Boutique Bag
            </span>
            <span
              className={`inline-flex items-center justify-center h-5 w-5 rounded-full text-[10px] font-bold ${
                items.length > 0
                  ? "bg-[#CCA147] text-[#001B55] shadow-gold"
                  : "bg-white/20 text-[#FCFFFE]"
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
