// app/admin/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNavbar from "../../../components/AdminNavbar";
import CollectionCarouselSection from "../../../components/CollectionCarouselSection";
import ProductCard, { Product } from "../../../components/ProductCard";
import NewProductForm from "../../../components/NewProductForm";
import { fetchJSON } from "../../../utils/api";
import JSZip from "jszip";

interface Collection {
  id: string;
  name: string;
  description?: string | null;
  isFeatured?: boolean;
  displayOrder?: number;
  products: Product[];
}

export default function AdminDashboard() {
  const router = useRouter();
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  // Manual Collection creation state
  const [newCollectionName, setNewCollectionName] = useState("");
  const [newCollectionFeatured, setNewCollectionFeatured] = useState(false);
  const [isCreatingCol, setIsCreatingCol] = useState(false);

  // ZIP Archive Upload & Carousel Translation state
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [zipCollectionName, setZipCollectionName] = useState("");
  const [zipDescription, setZipDescription] = useState("");
  const [zipFeatured, setZipFeatured] = useState(false);
  const [isUploadingZip, setIsUploadingZip] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Creation tab switcher ("zip" | "manual")
  const [activeTab, setActiveTab] = useState<"zip" | "manual">("zip");

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

    const loadData = async () => {
      try {
        const collData = await fetchJSON<Collection[]>("/api/collections");
        setCollections(collData || []);
      } catch (e) {
        console.error("Failed to fetch admin data", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [router]);

  // Sort helper to ensure Featured collections come first, then displayOrder asc
  const sortCollections = (list: Collection[]): Collection[] => {
    return [...list].sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return (a.displayOrder ?? 0) - (b.displayOrder ?? 0);
    });
  };

  const handleProductDelete = (id: string) => {
    setCollections((prev) =>
      prev.map((col) => ({
        ...col,
        products: col.products.filter((p) => p.id !== id),
      }))
    );
  };

  const handleProductUpdate = (updated: Product) => {
    setCollections((prev) =>
      prev.map((col) => ({
        ...col,
        products: col.products.map((p) =>
          p.id === updated.id ? { ...p, ...updated } : p
        ),
      }))
    );
  };

  const handleProductAdd = (newProd: Product) => {
    setCollections((prev) =>
      prev.map((col) =>
        col.id === newProd.collectionId
          ? { ...col, products: [newProd, ...col.products] }
          : col
      )
    );
  };

  // Create empty collection manually
  const handleCreateCollection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCollectionName.trim()) return;
    setIsCreatingCol(true);
    try {
      const created = await fetchJSON<Collection>("/api/collections", {
        method: "POST",
        body: JSON.stringify({
          name: newCollectionName.trim(),
          description: `Ears of Elegance — ${newCollectionName.trim()}`,
          isFeatured: newCollectionFeatured,
          displayOrder: collections.length + 1,
        }),
      });
      setCollections((prev) =>
        sortCollections([...prev, { ...created, products: [] }])
      );
      setNewCollectionName("");
      setNewCollectionFeatured(false);
    } catch (e) {
      console.error("Failed to create collection", e);
    } finally {
      setIsCreatingCol(false);
    }
  };

  // Handle ZIP file selection & automatic Name fill
  const handleZipFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setZipFile(file);
    if (file && !zipCollectionName) {
      const suggestedName = file.name.replace(/\.zip$/i, "").trim();
      setZipCollectionName(suggestedName);
    }
  };

  // Client-side ZIP extractor and image compressor to prevent Netlify HTTP 413 Payload Too Large
  const extractAndOptimizeZipImages = async (file: File): Promise<string[]> => {
    const zip = new JSZip();
    const contents = await zip.loadAsync(file);
    const imageEntries = Object.values(contents.files).filter((entry) => {
      if (
        entry.dir ||
        entry.name.startsWith(".") ||
        entry.name.includes("__MACOSX")
      )
        return false;
      return /\.(jpe?g|png|webp|gif|svg)$/i.test(entry.name);
    });

    if (imageEntries.length === 0) {
      throw new Error(
        "No supported jewelry image files (.jpg, .png, .webp, .gif, .svg) found inside ZIP archive."
      );
    }

    const optimizedImages: string[] = [];
    for (const entry of imageEntries) {
      const blob = await entry.async("blob");
      const dataUrl = await new Promise<string>((resolve) => {
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => {
          URL.revokeObjectURL(url);
          const maxDim = 950;
          let w = img.width || 800;
          let h = img.height || 800;
          if (w > maxDim || h > maxDim) {
            const scale = Math.min(maxDim / w, maxDim / h);
            w = Math.round(w * scale);
            h = Math.round(h * scale);
          }
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, w, h);
            resolve(canvas.toDataURL("image/webp", 0.82));
          } else {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
          }
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        };
        img.src = url;
      });

      optimizedImages.push(dataUrl);
    }

    return optimizedImages;
  };

  // Upload ZIP & Translate to Carousel
  const handleUploadZip = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipFile) return;

    setIsUploadingZip(true);
    setErrorMessage(null);

    try {
      let res: Response;
      try {
        setUploadStatus("Extracting and optimizing jewelry images from archive...");
        const optimizedImages = await extractAndOptimizeZipImages(zipFile);

        setUploadStatus(
          `Uploading ${optimizedImages.length} jewelry pieces to archive...`
        );
        res = await fetch("/api/collections/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name:
              zipCollectionName.trim() ||
              zipFile.name.replace(/\.zip$/i, "").trim() ||
              "New Archive",
            description: zipDescription.trim(),
            isFeatured: zipFeatured,
            images: optimizedImages,
          }),
        });
      } catch (clientExtractErr) {
        console.warn(
          "Client-side ZIP unpack fallback to FormData:",
          clientExtractErr
        );
        setUploadStatus("Uploading ZIP archive...");
        const formData = new FormData();
        formData.append("file", zipFile);
        formData.append("name", zipCollectionName.trim());
        formData.append("description", zipDescription.trim());
        formData.append("isFeatured", String(zipFeatured));

        res = await fetch("/api/collections/upload", {
          method: "POST",
          body: formData,
        });
      }

      const text = await res.text();
      let data: any = {};
      try {
        if (text && text.trim()) {
          data = JSON.parse(text);
        }
      } catch (parseErr) {
        console.warn("Upload endpoint returned non-JSON:", text);
      }

      if (!res.ok) {
        throw new Error(
          data.error ||
            text ||
            `Failed to upload ZIP archive (HTTP ${res.status}).`
        );
      }

      setUploadStatus(
        `✦ Success! Created collection "${data.name}" with ${
          data.products?.length || 0
        } pieces and translated into interactive carousel!`
      );
      setCollections((prev) => sortCollections([...prev, data]));

      // Clear input fields
      setZipFile(null);
      setZipCollectionName("");
      setZipDescription("");
      setZipFeatured(false);

      // Reset file input element
      const fileInput = document.getElementById(
        "zip-upload-input"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to upload and translate ZIP.");
    } finally {
      setIsUploadingZip(false);
      setTimeout(() => setUploadStatus(null), 6000);
    }
  };

  // Prominence Toggle: Determine which collection to showcase more prominently
  const handleToggleFeatured = async (id: string, current: boolean) => {
    const updatedFeatured = !current;
    // Optimistic UI update
    setCollections((prev) =>
      sortCollections(
        prev.map((col) =>
          col.id === id ? { ...col, isFeatured: updatedFeatured } : col
        )
      )
    );

    try {
      await fetchJSON(`/api/collections/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ isFeatured: updatedFeatured }),
      });
    } catch (e) {
      console.error("Failed to update prominence on server:", e);
    }
  };

  // Reorder Priority: Move Collection Up or Down
  const handleMoveOrder = async (
    id: string,
    direction: "up" | "down"
  ) => {
    const idx = collections.findIndex((c) => c.id === id);
    if (idx === -1) return;
    const targetIdx = direction === "up" ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= collections.length) return;

    const currentCol = collections[idx];
    const targetCol = collections[targetIdx];

    const currentOrder = currentCol.displayOrder ?? idx;
    const targetOrder = targetCol.displayOrder ?? targetIdx;

    const newList = [...collections];
    newList[idx] = { ...currentCol, displayOrder: targetOrder };
    newList[targetIdx] = { ...targetCol, displayOrder: currentOrder };

    setCollections(sortCollections(newList));

    try {
      await Promise.all([
        fetchJSON(`/api/collections/${currentCol.id}`, {
          method: "PATCH",
          body: JSON.stringify({ displayOrder: targetOrder }),
        }),
        fetchJSON(`/api/collections/${targetCol.id}`, {
          method: "PATCH",
          body: JSON.stringify({ displayOrder: currentOrder }),
        }),
      ]);
    } catch (e) {
      console.error("Failed to save reordered collection displayOrder:", e);
    }
  };

  // Delete an entire Collection
  const handleDeleteCollection = async (id: string) => {
    setCollections((prev) => prev.filter((c) => c.id !== id));
    try {
      await fetchJSON(`/api/collections/${id}`, { method: "DELETE" });
    } catch (e) {
      console.error("Failed to delete collection from server:", e);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] text-[#FAF9F6] flex items-center justify-center">
        <p className="text-sm font-serif uppercase tracking-widest text-[#E5C158] animate-pulse">
          Verifying Royal Credentials...
        </p>
      </div>
    );
  }

  const totalProducts = collections.reduce(
    (acc, c) => acc + (c.products?.length || 0),
    0
  );

  const featuredCount = collections.filter((c) => c.isFeatured).length;

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#FAF9F6]">
      <AdminNavbar
        onSignOut={() => {
          setAuthenticated(false);
          router.push("/admin/login");
        }}
      />

      <main className="max-w-7xl mx-auto p-6 md:p-10">
        {/* Luxury Dashboard Banner */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 glass-luxury p-8 rounded-sm border border-[#D4AF37]/30 shadow-2xl">
          <div>
            <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#E5C158] block mb-1">
              Designs by Roslyn Kiser Miller Archive
            </span>
            <h1 className="text-3xl font-serif font-bold text-gold-gradient uppercase tracking-wide">
              CATALOG & PROMINENCE ADMINISTRATION
            </h1>
            <p className="text-xs text-[#FAF9F6]/70 font-sans mt-1">
              Upload ZIP image archives to translate into carousels, control
              which categories showcase prominently, or manage pieces.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-[#1D0B2E] border border-[#D4AF37]/50 text-[#E5C158] px-5 py-2.5 rounded-sm text-xs font-serif uppercase tracking-widest font-semibold shadow-gold">
              ★ {featuredCount} Prominent
            </div>
            <div className="bg-[#121212] border border-[#D4AF37]/30 text-[#FAF9F6] px-5 py-2.5 rounded-sm text-xs font-serif uppercase tracking-widest font-semibold">
              {collections.length} Collections
            </div>
            <div className="bg-[#121212] border border-[#D4AF37]/30 text-[#FAF9F6] px-5 py-2.5 rounded-sm text-xs font-serif uppercase tracking-widest font-semibold">
              {totalProducts} Total Pieces
            </div>
          </div>
        </div>

        {/* Action Grid: Creation Studio & Create Product */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Create Collection / ZIP Upload Studio Card */}
          <div className="bg-[#121212] border border-[#D4AF37]/30 rounded-sm p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 border-b border-[#D4AF37]/20 pb-2">
                <span className="text-[10px] font-serif uppercase tracking-widest text-[#E5C158]">
                  Collection Creator Studio
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("zip")}
                    className={`text-[10px] uppercase font-serif px-2.5 py-1 rounded-sm transition ${
                      activeTab === "zip"
                        ? "bg-gold-gradient text-black font-bold"
                        : "bg-[#0B0B0B] text-[#FAF9F6]/60 hover:text-[#FAF9F6]"
                    }`}
                  >
                    ZIP to Carousel
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("manual")}
                    className={`text-[10px] uppercase font-serif px-2.5 py-1 rounded-sm transition ${
                      activeTab === "manual"
                        ? "bg-gold-gradient text-black font-bold"
                        : "bg-[#0B0B0B] text-[#FAF9F6]/60 hover:text-[#FAF9F6]"
                    }`}
                  >
                    Manual Category
                  </button>
                </div>
              </div>

              {activeTab === "zip" ? (
                <>
                  <h2 className="text-lg font-serif font-bold tracking-wider text-[#FAF9F6] mb-1">
                    + UPLOAD ZIP & GENERATE CAROUSEL
                  </h2>
                  <p className="text-xs text-[#FAF9F6]/60 font-sans mb-4">
                    Select a .zip file of jewelry images. We unpack the archive,
                    create products, and translate them directly into an
                    interactive carousel below.
                  </p>

                  <form onSubmit={handleUploadZip} className="space-y-3">
                    <div>
                      <label className="text-[10px] font-serif uppercase text-[#E5C158] block mb-1">
                        1. Select ZIP Image Archive (.zip)
                      </label>
                      <input
                        id="zip-upload-input"
                        type="file"
                        accept=".zip,application/zip"
                        onChange={handleZipFileChange}
                        className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-2 text-xs text-[#FAF9F6] file:mr-3 file:py-1 file:px-3 file:rounded-sm file:border-0 file:text-xs file:font-serif file:bg-[#1D0B2E] file:text-[#E5C158] hover:file:bg-[#2E1A47] cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-serif uppercase text-[#E5C158] block mb-1">
                        2. Collection Name (Auto-filled from ZIP)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Royal Ruby Suite"
                        value={zipCollectionName}
                        onChange={(e) => setZipCollectionName(e.target.value)}
                        className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-2 text-xs text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-serif uppercase text-[#E5C158] block mb-1">
                        3. Prominence Showcase Control
                      </label>
                      <label className="flex items-center space-x-2 p-2 rounded-sm bg-[#0B0B0B] border border-[#D4AF37]/25 cursor-pointer hover:border-[#D4AF37]">
                        <input
                          type="checkbox"
                          checked={zipFeatured}
                          onChange={(e) => setZipFeatured(e.target.checked)}
                          className="rounded border-[#D4AF37] text-[#D4AF37] focus:ring-0"
                        />
                        <span className="text-xs font-serif uppercase tracking-wider text-[#E5C158]">
                          ★ Showcase Prominently on Homepage
                        </span>
                      </label>
                    </div>

                    {uploadStatus && (
                      <div className="p-2.5 rounded-sm bg-[#1D0B2E] border border-[#D4AF37] text-[#E5C158] text-xs font-serif animate-pulse">
                        {uploadStatus}
                      </div>
                    )}

                    {errorMessage && (
                      <div className="p-2.5 rounded-sm bg-red-950/70 border border-red-500/50 text-red-300 text-xs">
                        ⚠️ {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isUploadingZip || !zipFile}
                      className="w-full rounded-sm bg-gold-gradient text-black py-2.5 text-xs font-serif font-bold uppercase tracking-widest shadow-gold hover:opacity-90 transition disabled:opacity-40"
                    >
                      {isUploadingZip
                        ? "Unpacking Archive & Translating..."
                        : "Upload ZIP & Generate Carousel"}
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h2 className="text-lg font-serif font-bold tracking-wider text-[#FAF9F6] mb-1">
                    + MANUAL COLLECTION CATEGORY
                  </h2>
                  <p className="text-xs text-[#FAF9F6]/60 font-sans mb-4">
                    Create an empty category and add jewelry pieces manually using
                    the Product Creator.
                  </p>

                  <form onSubmit={handleCreateCollection} className="space-y-3">
                    <input
                      type="text"
                      placeholder="e.g. Royal Sapphire Archive"
                      value={newCollectionName}
                      onChange={(e) => setNewCollectionName(e.target.value)}
                      className="w-full rounded-sm border border-[#D4AF37]/30 bg-[#0B0B0B] p-2.5 text-xs text-[#FAF9F6] focus:border-[#D4AF37] focus:outline-none"
                    />

                    <label className="flex items-center space-x-2 p-2 rounded-sm bg-[#0B0B0B] border border-[#D4AF37]/25 cursor-pointer hover:border-[#D4AF37]">
                      <input
                        type="checkbox"
                        checked={newCollectionFeatured}
                        onChange={(e) =>
                          setNewCollectionFeatured(e.target.checked)
                        }
                        className="rounded border-[#D4AF37] text-[#D4AF37] focus:ring-0"
                      />
                      <span className="text-xs font-serif uppercase tracking-wider text-[#E5C158]">
                        ★ Showcase Prominently on Homepage
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isCreatingCol}
                      className="w-full rounded-sm bg-gold-gradient text-black py-2.5 text-xs font-serif font-bold uppercase tracking-widest shadow-gold hover:opacity-90 transition"
                    >
                      {isCreatingCol
                        ? "Creating Category..."
                        : "Create Archive Line"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Create Product Form (spans 2 columns) */}
          <div className="lg:col-span-2">
            <NewProductForm
              collections={collections}
              onAdd={handleProductAdd}
            />
          </div>
        </div>

        {/* Prominent Showcase Instructions Bar */}
        <div className="mb-8 p-6 rounded-sm bg-gradient-to-r from-[#1D0B2E] via-[#121212] to-[#0B0B0B] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#E5C158] block mb-1">
              Prominent Showcase Manager
            </span>
            <h3 className="text-sm sm:text-base font-serif font-bold text-[#FAF9F6] uppercase tracking-wide">
              CONTROL WHICH COLLECTIONS APPEAR FIRST & PROMINENTLY ON THE HOMEPAGE
            </h3>
            <p className="text-xs text-[#FAF9F6]/70 font-sans mt-0.5">
              Use the <strong className="text-[#E5C158]">★ SHOWCASE PROMINENTLY</strong> button on any collection header below to feature it at the top of the homepage with a VIP Crown badge. Use <strong className="text-[#E5C158]">↑/↓ Priority</strong> arrows to order categories.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs font-serif uppercase px-3 py-1.5 rounded-sm border border-[#D4AF37]/50 bg-[#121212] text-[#E5C158]">
              {featuredCount} Active Prominent {featuredCount === 1 ? "Line" : "Lines"}
            </span>
          </div>
        </div>

        {/* Admin Catalog Display by Category */}
        <div className="mb-8 border-b border-[#D4AF37]/20 pb-4">
          <span className="text-xs font-serif uppercase tracking-[0.3em] text-[#E5C158] block mb-1">
            Active Management
          </span>
          <h2 className="text-2xl font-serif font-bold tracking-wider text-[#FAF9F6] uppercase">
            COLLECTION INVENTORY & ARCHIVE CAROUSELS
          </h2>
          <p className="text-xs text-[#FAF9F6]/60 font-sans mt-1">
            Inline price editing, prominence toggle controls, priority ordering, and archive deletion are active below.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20 text-center">
            <span className="inline-block h-8 w-8 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin mb-3"></span>
            <p className="text-xs font-serif uppercase tracking-widest text-[#FAF9F6]/60 animate-pulse">
              Loading Designs by Roslyn Kiser Miller Archive…
            </p>
          </div>
        ) : collections.length === 0 ? (
          <div className="text-center py-16 bg-[#121212] rounded-sm border border-[#D4AF37]/20">
            <p className="text-sm font-serif text-[#FAF9F6]/60">
              No collections found in archive. Upload a ZIP file above to generate your first carousel!
            </p>
          </div>
        ) : (
          <div className="space-y-14">
            {collections.map((collection, idx) => (
              <CollectionCarouselSection
                key={collection.id}
                collection={collection}
                onDelete={handleProductDelete}
                onUpdate={handleProductUpdate}
                isAdmin={true}
                onToggleFeatured={handleToggleFeatured}
                onMoveOrder={handleMoveOrder}
                onDeleteCollection={handleDeleteCollection}
                isFirst={idx === 0}
                isLast={idx === collections.length - 1}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
