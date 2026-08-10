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
    <nav className="sticky top-0 z-40 bg-[#001B55]/95 backdrop-blur-xl border-b border-[#CCA147]/40 px-6 md:px-12 py-4 text-[#FCFFFE] shadow-2xl flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <Link
          href="/admin/dashboard"
          className="font-serif font-bold text-lg md:text-xl tracking-[0.2em] text-[#CCA147] flex items-center gap-2 hover:text-[#E7CA83] transition"
        >
          <span className="h-2 w-2 rounded-full bg-[#CCA147] inline-block animate-pulse"></span>
          GREEK COLORS COLORS • ADMIN
        </Link>
        <Link
          href="/admin/dashboard"
          className="text-xs font-serif uppercase tracking-widest text-[#FCFFFE]/90 hover:text-[#CCA147] transition underline-offset-4 hover:underline"
        >
          Catalog
        </Link>
        <Link
          href="/admin/marketing-studio"
          className="text-xs font-serif uppercase tracking-widest text-[#CCA147] font-semibold hover:text-[#E7CA83] transition underline-offset-4 hover:underline flex items-center gap-1"
        >
          <span>✨</span> AI Marketing Studio
        </Link>
        <Link
          href="/products"
          className="text-xs font-serif uppercase tracking-widest text-[#FCFFFE]/70 hover:text-[#FCFFFE] transition underline-offset-4 hover:underline"
        >
          ← View Storefront
        </Link>
      </div>
      <div>
        <button
          onClick={handleSignOut}
          className="rounded-sm border border-[#CCA147]/60 bg-[#002677] hover:bg-[#003399] px-5 py-2 text-xs font-serif uppercase tracking-widest font-semibold text-[#FCFFFE] transition shadow-sm hover:border-[#CCA147]"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
