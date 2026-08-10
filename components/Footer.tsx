// components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#D4AF37]/30 bg-[#080B10] text-[#FAF9F6] py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Statement */}
        <div className="md:col-span-1 space-y-4">
          <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-gold-gradient block">
            GREEK COLORS
          </Link>
          <p className="text-xs text-[#FAF9F6]/75 leading-relaxed font-sans">
            Exclusive Royal Blue & Gold fine accessories and sorority keepsakes. Honoring the legacy, elegance, and distinction of Sigma Gamma Rho Sorority, Inc.
          </p>
          <div className="pt-2">
            <span className="inline-block h-[1.5px] w-16 bg-gradient-to-r from-[#FFD700] via-[#0033A0] to-transparent"></span>
          </div>
        </div>

        {/* Collections Links */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm uppercase tracking-widest text-[#E5C158] font-semibold">
            Greek Collections
          </h4>
          <ul className="space-y-2 text-xs text-[#FAF9F6]/80 font-sans">
            <li><Link href="/products" className="hover:text-[#D4AF37] transition">Royal Blue & Gold Essentials</Link></li>
            <li><Link href="/products" className="hover:text-[#D4AF37] transition">Centennial & Heritage Lines</Link></li>
            <li><Link href="/products" className="hover:text-[#D4AF37] transition">Earrings & Statement Jewelry</Link></li>
            <li><Link href="/products" className="hover:text-[#D4AF37] transition">Sorority Gift Sets</Link></li>
            <li><Link href="/products" className="hover:text-[#D4AF37] transition">Custom Wire & Pearl Collection</Link></li>
          </ul>
        </div>

        {/* Client Care */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm uppercase tracking-widest text-[#E5C158] font-semibold">
            Greek Concierge
          </h4>
          <ul className="space-y-2 text-xs text-[#FAF9F6]/80 font-sans">
            <li><Link href="#" className="hover:text-[#D4AF37] transition">Complimentary Insured Shipping</Link></li>
            <li><Link href="#" className="hover:text-[#D4AF37] transition">Chapter & Group Orders</Link></li>
            <li><Link href="#" className="hover:text-[#D4AF37] transition">Sorority License Verification</Link></li>
            <li><Link href="#" className="hover:text-[#D4AF37] transition">Care & Maintenance</Link></li>
          </ul>
        </div>

        {/* Private Concierge */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm uppercase tracking-widest text-[#E5C158] font-semibold">
            Sorority VIP List
          </h4>
          <p className="text-xs text-[#FAF9F6]/75 leading-relaxed font-sans">
            Receive exclusive invitations to new Sigma Gamma Rho collection releases and chapter pre-orders.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#0F2142] border border-[#D4AF37]/40 rounded-l-md px-3 py-2 text-xs text-[#FAF9F6] focus:outline-none focus:border-[#FFD700]"
            />
            <button className="bg-gold-gradient text-black font-semibold text-xs uppercase px-4 py-2 rounded-r-md hover:opacity-90 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#FAF9F6]/50 font-sans">
        <p>© {new Date().getFullYear()} Greek Colors. Dedicated to Sigma Gamma Rho Sorority, Inc.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/admin/dashboard" className="hover:text-[#D4AF37] transition">Admin Portal</Link>
          <span>•</span>
          <Link href="#" className="hover:text-[#D4AF37] transition">Privacy Policy</Link>
          <span>•</span>
          <Link href="#" className="hover:text-[#D4AF37] transition">Terms of Distinction</Link>
        </div>
      </div>
    </footer>
  );
}
