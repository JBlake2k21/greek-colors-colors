// components/NewProductForm.tsx
"use client";

import { useState } from "react";
import { fetchJSON } from "../utils/api";
import { Product } from "./ProductCard";

export default function NewProductForm({
  collections,
  onAdd,
}: {
  collections: { id: string; name: string }[];
  onAdd: (p: Product) => void;
}) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [collectionId, setCollectionId] = useState(
    collections[0]?.id || ""
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const newProd = await fetchJSON<Product>("/api/products", {
        method: "POST",
        body: JSON.stringify({
          title,
          price,
          description,
          images: imageUrl ? [imageUrl] : [],
          collectionId,
          inStock: true,
        }),
      });
      onAdd(newProd);
      setTitle("");
      setPrice(0);
      setDescription("");
      setImageUrl("");
      setCollectionId(collections[0]?.id || "");
    } catch (err) {
      console.error(err);
      alert("Failed to create product");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#121212] border border-[#D4AF37]/25 rounded-sm p-6 shadow-xl space-y-4"
    >
      <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3">
        <div>
          <span className="text-[10px] font-serif uppercase tracking-widest text-[#E5C158] block">
            Bespoke Catalog Entry
          </span>
          <h3 className="font-serif text-lg font-bold tracking-wider text-[#FAF9F6]">
            ADD NEW JEWELRY PIECE
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/70 mb-1">
            Piece Title
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Imperial Diamond Earrings"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-2.5 text-xs text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/70 mb-1">
            Price (USD $)
          </label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
            className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-2.5 text-xs text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/70 mb-1">
            Collection Category
          </label>
          <select
            value={collectionId}
            onChange={(e) => setCollectionId(e.target.value)}
            className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-2.5 text-xs text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
          >
            {collections.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/70 mb-1">
            Image URL
          </label>
          <input
            type="url"
            placeholder="https://... (or collection image path)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-2.5 text-xs text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/70 mb-1">
          Craftsmanship Description
        </label>
        <textarea
          rows={2}
          placeholder="Details about gold purity, diamond clarity, and artisan history..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-2.5 text-xs text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-sm bg-gold-gradient text-black font-serif text-xs uppercase tracking-widest font-bold shadow-gold hover:opacity-90 transition"
      >
        {isSubmitting ? "Saving to Archive…" : "Add Piece to Archive"}
      </button>
    </form>
  );
}
