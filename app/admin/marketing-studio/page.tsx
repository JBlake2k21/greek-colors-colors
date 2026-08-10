// app/admin/marketing-studio/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminNavbar from "../../../components/AdminNavbar";
import { ProductAndPricing } from "../../../lib/schemas/product-pricing.schema";
import { Sparkles, Image as ImageIcon, DollarSign, Tag, Check, Copy, ExternalLink, RefreshCw, Send, AlertCircle } from "lucide-react";

export default function MarketingStudioPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  // Input State
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800");
  const [adminNotes, setAdminNotes] = useState(
    "18k gold pendant with emerald and diamonds. Part of the Royal Confidence collection. Designed to inspire female leaders with timeless inner strength."
  );

  // Generation & Status State
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Editable Review Form State (Handoff Data)
  const [formState, setFormState] = useState<ProductAndPricing | null>(null);

  // Publish / Payment Link State
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishResult, setPublishResult] = useState<{
    product_id: string;
    price_id: string;
    payment_link_url: string;
    price_usd: number;
  } | null>(null);

  const [copiedCaption, setCopiedCaption] = useState(false);

  useEffect(() => {
    const session =
      typeof window !== "undefined"
        ? localStorage.getItem("admin_session")
        : null;
    if (session !== "authenticated") {
      router.replace("/admin/login");
      return;
    }
    setAuthenticated(true);
  }, [router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateCopy = async () => {
    setIsGenerating(true);
    setError(null);
    setPublishResult(null);

    try {
      const response = await fetch("/api/marketing-studio/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: imageUrl,
          notes: adminNotes,
        }),
      });

      const json = await response.json();
      if (!response.ok || !json.success) {
        throw new Error(json.error || "Failed to generate AI marketing copy.");
      }

      setFormState(json.data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during AI copywriting.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePublishStripe = async () => {
    if (!formState) return;
    setIsPublishing(true);
    setError(null);

    try {
      const response = await fetch("/api/marketing-studio/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productData: formState,
        }),
      });

      const json = await response.json();
      if (!response.ok || !json.success) {
        throw new Error(
          json.error || "Failed to publish product and create Stripe payment link."
        );
      }

      setPublishResult(json.data);
    } catch (err: any) {
      setError(err.message || "Failed to sync with Stripe payment gateway.");
    } finally {
      setIsPublishing(false);
    }
  };

  const handleCopyCaption = () => {
    if (!formState) return;
    navigator.clipboard.writeText(formState.suggested_instagram_caption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2500);
  };

  const addMaterialTag = (tag: string) => {
    if (!formState || !tag.trim()) return;
    if (!formState.materials_list.includes(tag.trim())) {
      setFormState({
        ...formState,
        materials_list: [...formState.materials_list, tag.trim()],
      });
    }
  };

  const removeMaterialTag = (idx: number) => {
    if (!formState) return;
    setFormState({
      ...formState,
      materials_list: formState.materials_list.filter((_, i) => i !== idx),
    });
  };

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-[#0F051D] text-[#FAF9F6] selection:bg-[#D4AF37] selection:text-[#1D0B2E]">
      <AdminNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Studio Header */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#D4AF37]/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-serif uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              AI Copy & Pricing Studio • Ears of Elegance
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-white">
              Confidence Coach in a Bottle™ <span className="text-gold-gradient">Studio</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#FAF9F6]/70 max-w-2xl">
              Automated multimodal vision & copy studio for Roslyn Kiser Miller’s luxury portal.
              Inspect jewelry aesthetics, enforce brand voice, and sync live pricing with Stripe.
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-8 p-4 rounded-xl border border-red-500/40 bg-red-950/40 text-red-200 flex items-start gap-3 backdrop-blur-md">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-white">Studio Notification:</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: Input & Multimodal Trigger (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1D0B2E]/90 border border-[#D4AF37]/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
              
              <h2 className="text-lg font-serif font-bold text-[#D4AF37] flex items-center gap-2 tracking-wide">
                <ImageIcon className="w-5 h-5 text-[#D4AF37]" />
                1. Product Visual & Inspiration
              </h2>
              <p className="text-xs text-[#FAF9F6]/60 mt-1 mb-6">
                Upload or paste a jewelry image for GPT-4o vision analysis.
              </p>

              {/* Image Input Options */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/80 mb-2">
                    Image URL or Base64 Data
                  </label>
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-[#12061D] border border-[#D4AF37]/30 rounded-lg px-4 py-2.5 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D4AF37]/40 bg-[#1D0B2E] hover:bg-[#2E1A47] text-xs font-serif uppercase tracking-wider text-[#D4AF37] transition">
                    <ImageIcon className="w-4 h-4" />
                    Upload Local Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-gray-400">or use default Unsplash sample</span>
                </div>

                {/* Live Image Preview */}
                {imageUrl && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-black/40 aspect-square max-h-72 w-full flex items-center justify-center relative group">
                    <img
                      src={imageUrl}
                      alt="Jewelry Preview"
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                      <span className="text-xs text-[#D4AF37] font-serif uppercase tracking-widest">
                        Ready for Vision Analysis
                      </span>
                    </div>
                  </div>
                )}

                {/* Admin Notes */}
                <div className="pt-2">
                  <label className="block text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/80 mb-2">
                    Admin Raw Notes & Vision
                  </label>
                  <textarea
                    rows={4}
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Describe craftsmanship, gemstone quality, empowerment themes, or target collection..."
                    className="w-full bg-[#12061D] border border-[#D4AF37]/30 rounded-lg p-3 text-sm text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition leading-relaxed"
                  />
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerateCopy}
                  disabled={isGenerating}
                  className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-[#1D0B2E] font-serif font-bold text-sm uppercase tracking-widest shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-[#1D0B2E]" />
                      Crafting Brand Voice...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#1D0B2E]" />
                      Generate Luxury Copy & Pricing
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Editable Handoff Form & Stripe Publish (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {!formState ? (
              <div className="bg-[#1D0B2E]/50 border border-dashed border-[#D4AF37]/30 rounded-2xl p-12 text-center h-full min-h-[500px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Awaiting AI Studio Generation
                </h3>
                <p className="text-sm text-[#FAF9F6]/60 max-w-md mt-2">
                  Upload an image and click "Generate Luxury Copy & Pricing" to invoke GPT-4o with strict brand voice validation.
                </p>
              </div>
            ) : (
              <div className="bg-[#1D0B2E]/90 border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative animate-fade-in">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-serif uppercase tracking-widest text-[#D4AF37]">
                      Step 2 • Admin Review & Handoff
                    </span>
                    <h2 className="text-xl font-serif font-bold text-white mt-0.5">
                      Editable Studio Copy & Pricing
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    Strict Schema Verified
                  </span>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Product Title */}
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-widest text-[#D4AF37] mb-2">
                      Product Title
                    </label>
                    <input
                      type="text"
                      value={formState.product_title}
                      onChange={(e) =>
                        setFormState({ ...formState, product_title: e.target.value })
                      }
                      className="w-full bg-[#12061D] border border-[#D4AF37]/40 rounded-lg px-4 py-2.5 text-base font-serif font-bold text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Luxury Description */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-serif uppercase tracking-widest text-[#D4AF37]">
                        Luxury Description (Confidence Coach in a Bottle™)
                      </label>
                    </div>
                    <textarea
                      rows={5}
                      value={formState.luxury_description}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          luxury_description: e.target.value,
                        })
                      }
                      className="w-full bg-[#12061D] border border-[#D4AF37]/40 rounded-lg p-3.5 text-sm text-[#FAF9F6] leading-relaxed focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Materials Tag Editor */}
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-widest text-[#D4AF37] mb-2">
                      Luxury Materials & Craftsmanship Tags
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formState.materials_list.map((mat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#FAF9F6] text-xs font-serif tracking-wider"
                        >
                          {mat}
                          <button
                            type="button"
                            onClick={() => removeMaterialTag(i)}
                            className="hover:text-red-400 font-bold ml-1"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Type a material and press Enter to add..."
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addMaterialTag(e.currentTarget.value);
                          e.currentTarget.value = "";
                        }
                      }}
                      className="w-full bg-[#12061D] border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-xs text-[#FAF9F6] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Pricing Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#D4AF37]/20">
                    <div>
                      <label className="block text-xs font-serif uppercase tracking-widest text-[#D4AF37] mb-2">
                        Pricing Type
                      </label>
                      <select
                        value={formState.pricing_type}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            pricing_type: e.target.value as any,
                          })
                        }
                        className="w-full bg-[#12061D] border border-[#D4AF37]/40 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="individual">Individual Piece</option>
                        <option value="collection">Curated Collection Bundle</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-serif uppercase tracking-widest text-[#D4AF37] mb-2">
                        {formState.pricing_type === "collection"
                          ? "Collection Bundle Price (USD)"
                          : "Suggested Retail Price (USD)"}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-gray-400 text-sm font-serif">
                          $
                        </span>
                        <input
                          type="number"
                          value={
                            formState.pricing_type === "collection"
                              ? formState.collection_bundle_price_usd ?? formState.suggested_retail_price_usd
                              : formState.suggested_retail_price_usd
                          }
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            if (formState.pricing_type === "collection") {
                              setFormState({
                                ...formState,
                                collection_bundle_price_usd: val,
                              });
                            } else {
                              setFormState({
                                ...formState,
                                suggested_retail_price_usd: val,
                              });
                            }
                          }}
                          className="w-full bg-[#12061D] border border-[#D4AF37]/40 rounded-lg pl-8 pr-4 py-2.5 text-base font-bold text-[#D4AF37] focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Instagram Caption */}
                  <div className="pt-2 border-t border-[#D4AF37]/20">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-serif uppercase tracking-widest text-[#D4AF37]">
                        Suggested Instagram Caption
                      </label>
                      <button
                        type="button"
                        onClick={handleCopyCaption}
                        className="inline-flex items-center gap-1 text-xs text-[#D4AF37] hover:underline font-serif tracking-wider"
                      >
                        {copiedCaption ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy Caption
                          </>
                        )}
                      </button>
                    </div>
                    <textarea
                      rows={3}
                      value={formState.suggested_instagram_caption}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          suggested_instagram_caption: e.target.value,
                        })
                      }
                      className="w-full bg-[#12061D] border border-[#D4AF37]/40 rounded-lg p-3 text-xs text-[#FAF9F6]/90 leading-relaxed focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Stripe Payment Gateway Sync */}
                  <div className="pt-4 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                        Stripe Payment Gateway Sync
                      </h4>
                      <p className="text-xs text-[#FAF9F6]/60 mt-0.5">
                        Converts USD price to cents and generates a live purchasable checkout link.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handlePublishStripe}
                      disabled={isPublishing}
                      className="py-3 px-6 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-[#1D0B2E] font-serif font-bold text-xs uppercase tracking-widest shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isPublishing ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          Syncing Stripe...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Publish Live to Store & Stripe
                        </>
                      )}
                    </button>
                  </div>

                  {/* Published Stripe Link Banner */}
                  {publishResult && (
                    <div className="mt-4 p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
                      <div>
                        <div className="flex items-center gap-2 font-serif font-bold text-white text-sm">
                          <Check className="w-4 h-4 text-emerald-400" />
                          Product Published Successfully!
                        </div>
                        <p className="text-xs text-emerald-300/80 mt-1">
                          Price: ${publishResult.price_usd} USD • Stripe Product ID:{" "}
                          <span className="font-mono text-emerald-100">{publishResult.product_id}</span>
                        </p>
                      </div>
                      <a
                        href={publishResult.payment_link_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold text-xs hover:bg-emerald-400 transition shrink-0"
                      >
                        Test Checkout Link
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
