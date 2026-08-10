// components/AdminNavbar.tsx
"use client";

import Link from "next/link";

interface AdminNavbarProps {
  onSignOut?: () => void;
}

export default function AdminNavbar({ onSignOut }: AdminNavbarProps) {
  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      document.cookie =
        "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      localStorage.removeItem("admin_session");
    }
    if (onSignOut) {
      onSignOut();
    } else {
      window.location.href = "/admin/login";
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#1D0B2E]/95 backdrop-blur-xl border-b border-[#D4AF37]/25 px-6 md:px-12 py-4 text-[#FAF9F6] shadow-2xl flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <Link
          href="/admin/dashboard"
          className="font-serif font-bold text-lg md:text-xl tracking-[0.2em] text-gold-gradient flex items-center gap-2 hover:opacity-90 transition"
        >
          <span className="h-2 w-2 rounded-full bg-[#D4AF37] inline-block animate-pulse"></span>
          EARS OF ELEGANCE • ADMIN
        </Link>
        <Link
          href="/admin/dashboard"
          className="text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/80 hover:text-[#D4AF37] transition underline-offset-4 hover:underline"
        >
          Catalog
        </Link>
        <Link
          href="/admin/marketing-studio"
          className="text-xs font-serif uppercase tracking-widest text-[#D4AF37] font-semibold hover:opacity-80 transition underline-offset-4 hover:underline flex items-center gap-1"
        >
          <span>✨</span> AI Marketing Studio
        </Link>
        <Link
          href="/products"
          className="text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/60 hover:text-[#FAF9F6] transition underline-offset-4 hover:underline"
        >
          ← View Storefront
        </Link>
      </div>
      <div>
        <button
          onClick={handleSignOut}
          className="rounded-sm border border-[#D4AF37]/40 bg-[#121212] hover:bg-[#2E1A47] px-5 py-2 text-xs font-serif uppercase tracking-widest font-semibold text-[#FAF9F6] transition shadow-sm hover:border-[#D4AF37]"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
