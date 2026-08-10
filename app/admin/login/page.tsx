// app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      (email.toLowerCase() === "admin@earsofelegance.com" ||
        email.toLowerCase() === "admin@example.com" ||
        email.toLowerCase() === "admin") &&
      (password === "admin123" || password === "password" || password === "admin")
    ) {
      if (typeof window !== "undefined") {
        document.cookie =
          "admin_session=authenticated; path=/; max-age=86400; SameSite=Lax";
        localStorage.setItem("admin_session", "authenticated");
      }
      router.push("/admin/dashboard");
      router.refresh();
    } else {
      setError(
        "Invalid royal credentials. Try admin@earsofelegance.com / admin123"
      );
    }
  };

  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center bg-[#0B0B0B] px-4 py-12">
      <div className="mb-6 text-center">
        <Link
          href="/"
          className="text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/60 hover:text-[#D4AF37] transition"
        >
          ← Return to Storefront
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-sm glass-luxury p-8 shadow-2xl border-[0.5px] border-[#D4AF37]/40 bg-[#1D0B2E]/80"
      >
        <div className="text-center space-y-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span className="text-[10px] font-serif uppercase tracking-[0.3em] text-[#E5C158] block">
            Designs by Roslyn Kiser Miller Archive
          </span>
          <h2 className="text-2xl font-serif font-bold text-gold-gradient uppercase tracking-wider">
            ADMINISTRATOR PORTAL
          </h2>
          <p className="text-xs text-[#FAF9F6]/70 font-sans">
            Sign in to manage jewelry collections and signature pricing
          </p>
        </div>

        {error && (
          <div className="rounded-sm bg-red-900/40 p-3 text-center text-xs font-sans text-red-300 border border-red-500/40">
            {error}
          </div>
        )}

        <div>
          <label className="block text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/80 mb-1.5">
            Admin Email
          </label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@earsofelegance.com"
            className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-3 text-xs text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/80 mb-1.5">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-3 text-xs text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-sm bg-gold-gradient py-3.5 text-xs font-serif uppercase tracking-widest font-bold text-black hover:opacity-95 transition shadow-gold"
        >
          Enter Admin Portal
        </button>

        <div className="mt-4 rounded-sm bg-[#121212]/80 p-3 text-center border border-[#D4AF37]/20">
          <p className="text-[10px] text-[#E5C158] font-serif uppercase tracking-widest">
            Demo Credentials:
          </p>
          <p className="text-[11px] text-[#FAF9F6] font-mono mt-0.5">
            admin@earsofelegance.com / admin123
          </p>
        </div>
      </form>
    </div>
  );
}
