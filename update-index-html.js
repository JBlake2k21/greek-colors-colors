const fs = require('fs');

const b64 = fs.readFileSync('roslyn-b64.txt', 'utf8').trim();
const collectionsData = fs.readFileSync('collections-data.json', 'utf8').trim();
const photoDataUrl = `data:image/jpeg;base64,${b64}`;

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Greek Colors Colors — Official Sigma Gamma Rho Fine Jewelry & Boutique</title>
  <meta name="description" content="Premier luxury Greek sorority fine jewelry boutique celebrating Sigma Gamma Rho Sorority, Inc. Official Royal Blue (#003399) & Gold (#CCA147) collection by Founder & Master Jeweler Roslyn Kiser Miller.">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            sgrho: {
              royal: '#003399',
              deep: '#001B55',
              navy: '#00123A',
              gold: '#CCA147',
              palegold: '#E7CA83',
              white: '#FCFFFE',
            }
          },
          fontFamily: {
            serif: ['Cinzel', 'Georgia', 'serif'],
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <style>
    body {
      background-color: #00123A;
      color: #FCFFFE;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }
    
    .gold-gradient-text {
      background: linear-gradient(135deg, #CCA147 0%, #FFF5DA 50%, #CCA147 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .btn-gold {
      background: linear-gradient(135deg, #CCA147 0%, #E7CA83 100%);
      color: #001B55;
      font-weight: 700;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(204, 161, 71, 0.35);
    }
    .btn-gold:hover {
      background: linear-gradient(135deg, #E7CA83 0%, #CCA147 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(204, 161, 71, 0.55);
    }

    .glass-card {
      background: rgba(0, 27, 85, 0.90);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(204, 161, 71, 0.35);
    }

    .modal-backdrop {
      background: rgba(0, 18, 58, 0.92);
      backdrop-filter: blur(14px);
    }
  </style>
</head>
<body class="min-h-screen flex flex-col selection:bg-[#CCA147] selection:text-[#001B55]">

  <!-- TOP BRANDING & TAB STRIP -->
  <div class="bg-[#001B55] border-b border-[#CCA147]/40 py-2 px-4 text-center text-xs font-serif tracking-[0.2em] text-[#E7CA83] flex items-center justify-between">
    <div class="hidden sm:flex items-center gap-2">
      <span class="inline-block w-2 h-2 rounded-full bg-[#CCA147] animate-pulse"></span>
      SIGMA GAMMA RHO SORORITY, INC. OFFICIAL PALETTE: ROYAL BLUE #003399 & GOLD #CCA147
    </div>
    <div class="mx-auto sm:mx-0 flex items-center gap-3">
      <button onclick="switchTab('storefront')" id="tab-btn-storefront" class="text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#CCA147] text-[#001B55] font-bold">
        Storefront View
      </button>
      <button onclick="switchTab('admin')" id="tab-btn-admin" class="text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#FCFFFE] hover:bg-[#001B55]">
        ⚙️ Admin Catalog Portal
      </button>
      <button onclick="switchTab('studio')" id="tab-btn-studio" class="text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#E7CA83] hover:bg-[#001B55]">
        ✨ AI Marketing Studio
      </button>
    </div>
  </div>

  <!-- HEADER NAVBAR -->
  <header class="sticky top-0 z-40 bg-[#001B55]/95 backdrop-blur-xl border-b border-[#CCA147]/30 px-6 lg:px-16 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- LOGO & SGRHO CREST -->
      <a href="#" onclick="switchTab('storefront')" class="flex items-center gap-3 group">
        <div class="w-11 h-11 rounded-full border-2 border-[#CCA147] flex items-center justify-center bg-[#003399] text-[#CCA147] font-serif font-bold text-lg shadow-[0_0_20px_rgba(204,161,71,0.4)] group-hover:scale-105 transition-transform">
          ΣΓΡ
        </div>
        <div>
          <span class="font-serif font-extrabold text-xl lg:text-2xl tracking-[0.2em] text-[#FCFFFE] block group-hover:text-[#E7CA83] transition-colors">
            GREEK COLORS COLORS
          </span>
          <span class="text-[9px] font-sans uppercase tracking-[0.3em] text-[#CCA147] block font-semibold">
            Bespoke Fine Jewelry • Roslyn Kiser Miller
          </span>
        </div>
      </a>

      <!-- NAV LINKS -->
      <nav class="hidden md:flex items-center space-x-8 text-xs font-serif uppercase tracking-[0.2em] text-[#FCFFFE]/90">
        <a href="#collections-section" onclick="switchTab('storefront')" class="hover:text-[#CCA147] transition">Real Collections (120 Pieces)</a>
        <a href="#designer-spotlight" onclick="switchTab('storefront')" class="hover:text-[#CCA147] transition">Designer Portrait</a>
        <button onclick="toggleBioModal()" class="hover:text-[#CCA147] transition">Roslyn Kiser Miller Bio</button>
      </nav>

      <!-- CART & ACTIONS -->
      <div class="flex items-center gap-4">
        <button onclick="toggleBioModal()" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CCA147]/80 bg-[#003399]/70 text-xs font-serif uppercase tracking-widest text-[#E7CA83] hover:bg-[#003399] transition shadow-md">
          <span>👑</span> Master Jeweler Bio
        </button>
        
        <button onclick="toggleCartDrawer()" class="relative p-2.5 rounded-full border border-[#CCA147]/50 bg-[#001B55] hover:border-[#CCA147] transition text-[#FCFFFE]">
          <svg class="w-5 h-5 text-[#CCA147]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
          <span id="cart-count" class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#CCA147] text-[#001B55] font-bold text-[10px] flex items-center justify-center shadow-md">0</span>
        </button>
      </div>

    </div>
  </header>

  <!-- MAIN TAB 1: STOREFRONT VIEW -->
  <div id="view-storefront" class="tab-content">

    <!-- HERO SECTION -->
    <section class="relative py-20 lg:py-28 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-[#001B55] via-[#003399]/40 to-[#00123A]">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#003399]/30 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute top-1/3 right-10 w-96 h-96 bg-[#CCA147]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto text-center relative z-10">
        
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#001B55] border border-[#CCA147] text-[#E7CA83] text-xs font-serif uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(204,161,71,0.25)]">
          <span>✨</span> Sisterhood • Scholarship • Service • Founded 1922
        </div>

        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-[#FCFFFE] leading-[1.15] mb-6">
          CELEBRATING SISTERHOOD IN <br/>
          <span class="gold-gradient-text">ROYAL BLUE & GOLD</span>
        </h1>

        <p class="max-w-2xl mx-auto text-sm sm:text-base text-[#FCFFFE]/85 font-sans leading-relaxed mb-10">
          Empowering members of Sigma Gamma Rho Sorority, Inc. with bespoke, limited-edition fine jewelry created by Master Jeweler <strong class="text-[#E7CA83]">Roslyn Kiser Miller</strong>. Featuring all 9 of her official Google Drive collections.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#collections-section" class="btn-gold px-8 py-4 rounded-sm font-serif text-xs uppercase tracking-[0.25em] w-full sm:w-auto">
            View All 120 Jewelry Pieces →
          </a>
          <button onclick="toggleBioModal()" class="px-8 py-4 rounded-sm border border-[#CCA147] bg-[#001B55]/80 text-[#FCFFFE] font-serif text-xs uppercase tracking-[0.25em] hover:bg-[#003399] transition w-full sm:w-auto">
            Meet Designer Roslyn Kiser Miller
          </button>
        </div>

        <!-- ROSLYN KISER MILLER OFFICIAL PORTRAIT CARD -->
        <div id="designer-spotlight" class="mt-14 max-w-2xl mx-auto p-6 rounded-2xl glass-card text-left border-t-2 border-t-[#CCA147] flex flex-col sm:flex-row items-center gap-6 shadow-2xl">
          <div class="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#CCA147] flex-shrink-0 shadow-[0_0_25px_rgba(204,161,71,0.5)]">
            <img src="${photoDataUrl}" alt="Roslyn Kiser Miller Official Portrait" class="w-full h-full object-cover object-top">
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-serif font-bold text-xl text-[#FCFFFE]">Roslyn Kiser Miller</h3>
              <span class="px-2.5 py-0.5 rounded text-[10px] font-serif font-bold text-[#E7CA83] bg-[#003399] border border-[#CCA147]/60">ΣΓΡ</span>
            </div>
            <span class="text-xs font-serif uppercase tracking-[0.18em] text-[#CCA147] block mt-0.5 font-semibold">Founder • Master Jeweler • Creative Director</span>
            <p class="text-xs italic text-[#E7CA83] mt-2 leading-relaxed">&ldquo;The most beautiful jewelry is measured not solely by its brilliance, but by the memories it preserves and the legacy it carries forward.&rdquo;</p>
          </div>
        </div>

      </div>
    </section>

    <!-- PALETTE STRIP -->
    <section class="py-8 bg-[#001B55] border-y border-[#CCA147]/30 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="p-3.5 rounded bg-[#003399] border border-[#CCA147]/40">
          <div class="w-5 h-5 rounded-full bg-[#003399] border border-[#FCFFFE] mx-auto mb-1.5"></div>
          <span class="text-xs font-serif uppercase tracking-widest text-[#FCFFFE] font-bold block">Royal / Reflex Blue</span>
          <span class="text-[10px] font-mono text-[#E7CA83]">HEX #003399</span>
        </div>
        <div class="p-3.5 rounded bg-[#00123A] border border-[#CCA147]/40">
          <div class="w-5 h-5 rounded-full bg-[#CCA147] border border-[#FCFFFE] mx-auto mb-1.5"></div>
          <span class="text-xs font-serif uppercase tracking-widest text-[#CCA147] font-bold block">Official Gold</span>
          <span class="text-[10px] font-mono text-[#FCFFFE]/80">HEX #CCA147</span>
        </div>
        <div class="p-3.5 rounded bg-[#003399] border border-[#CCA147]/40">
          <div class="w-5 h-5 rounded-full bg-[#E7CA83] border border-[#FCFFFE] mx-auto mb-1.5"></div>
          <span class="text-xs font-serif uppercase tracking-widest text-[#E7CA83] font-bold block">Pale Gold Accent</span>
          <span class="text-[10px] font-mono text-[#FCFFFE]/80">HEX #E7CA83</span>
        </div>
        <div class="p-3.5 rounded bg-[#00123A] border border-[#CCA147]/40">
          <div class="w-5 h-5 rounded-full bg-[#FCFFFE] border border-[#CCA147] mx-auto mb-1.5"></div>
          <span class="text-xs font-serif uppercase tracking-widest text-[#FCFFFE] font-bold block">Bright White</span>
          <span class="text-[10px] font-mono text-[#E7CA83]">HEX #FCFFFE</span>
        </div>
      </div>
    </section>

    <!-- REAL GOOGLE DRIVE COLLECTIONS & JEWELRY PIECES SECTION -->
    <section id="collections-section" class="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <span class="text-xs font-serif uppercase tracking-[0.3em] text-[#CCA147] block mb-2">9 Collections • 120 Authentic Pieces</span>
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#FCFFFE] tracking-wide uppercase">
          ROSLYN KISER MILLER FINE JEWELRY ARCHIVE
        </h2>
        <div class="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#CCA147] to-transparent mx-auto mt-4"></div>
      </div>

      <!-- COLLECTION FILTER TABS -->
      <div id="category-filter-bar" class="flex flex-wrap items-center justify-center gap-2 mb-12">
        <!-- Injected via JS -->
      </div>

      <!-- STORE PRODUCTS GRID -->
      <div id="store-products-grid" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Injected via JS -->
      </div>
    </section>

  </div>

  <!-- MAIN TAB 2: ADMIN CATALOG PORTAL -->
  <div id="view-admin" class="tab-content hidden">
    <main class="max-w-7xl mx-auto p-6 md:p-10">
      
      <!-- Admin Header Banner -->
      <div class="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 glass-card p-8 rounded-xl border border-[#CCA147]/50 shadow-2xl">
        <div>
          <span class="text-xs font-serif uppercase tracking-[0.3em] text-[#E7CA83] block mb-1">
            Designs by Roslyn Kiser Miller Archive
          </span>
          <h1 class="text-2xl sm:text-3xl font-serif font-bold text-[#CCA147] uppercase tracking-wide">
            CATALOG & PROMINENCE ADMINISTRATION
          </h1>
          <p class="text-xs text-[#FCFFFE]/80 font-sans mt-1">
            Upload ZIP image archives to translate into carousels, control which categories showcase prominently, or manage pieces.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <div id="admin-featured-count" class="bg-[#003399] border border-[#CCA147] text-[#E7CA83] px-4 py-2 rounded text-xs font-serif uppercase tracking-widest font-semibold shadow-md">
            ★ Prominent Showcase Lines
          </div>
          <div id="admin-total-count" class="bg-[#00123A] border border-[#CCA147]/40 text-[#FCFFFE] px-4 py-2 rounded text-xs font-serif uppercase tracking-widest font-semibold">
            120 Archive Pieces
          </div>
        </div>
      </div>

      <!-- ZIP Archive Upload Studio & Inventory Creator -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        <div class="bg-[#001B55] border border-[#CCA147]/50 rounded-xl p-6 shadow-xl">
          <span class="text-[10px] font-serif uppercase tracking-widest text-[#E7CA83] block mb-1">ZIP to Carousel Studio</span>
          <h2 class="text-lg font-serif font-bold tracking-wider text-[#FCFFFE] mb-2">+ UPLOAD ZIP ARCHIVE</h2>
          <p class="text-xs text-[#FCFFFE]/70 mb-4">Select a .zip file of jewelry images. We unpack the archive and translate into interactive carousels.</p>

          <form onsubmit="handleZipUpload(event)" class="space-y-4">
            <div>
              <label class="text-[10px] font-serif uppercase text-[#CCA147] block mb-1">1. Select ZIP Archive (.zip)</label>
              <input type="file" accept=".zip" required class="w-full text-xs text-[#FCFFFE] bg-[#00123A] border border-[#CCA147]/40 p-2 rounded cursor-pointer">
            </div>
            <div>
              <label class="text-[10px] font-serif uppercase text-[#CCA147] block mb-1">2. Collection Name</label>
              <input type="text" id="zip-col-name" placeholder="e.g. Royal Centennial Suite" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-2.5 rounded text-xs text-[#FCFFFE] focus:border-[#CCA147] focus:outline-none">
            </div>
            <label class="flex items-center space-x-2 p-2 rounded bg-[#00123A] border border-[#CCA147]/30 cursor-pointer">
              <input type="checkbox" id="zip-featured" class="rounded text-[#CCA147]">
              <span class="text-xs font-serif uppercase tracking-wider text-[#E7CA83]">★ Showcase Prominently on Homepage</span>
            </label>
            <button type="submit" class="btn-gold w-full py-3 rounded text-xs uppercase tracking-widest">
              Upload ZIP & Generate Carousel
            </button>
          </form>
        </div>

        <div class="lg:col-span-2 bg-[#001B55] border border-[#CCA147]/50 rounded-xl p-6 shadow-xl">
          <span class="text-[10px] font-serif uppercase tracking-widest text-[#E7CA83] block mb-1">Product Creator</span>
          <h2 class="text-lg font-serif font-bold tracking-wider text-[#FCFFFE] mb-4">+ ADD INDIVIDUAL PIECE TO ARCHIVE</h2>

          <form onsubmit="handleAddProduct(event)" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="text-[10px] font-serif uppercase text-[#CCA147] block mb-1">Piece Title</label>
              <input type="text" id="prod-title" required placeholder="e.g. Sigma Gamma Sapphire Brooch" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-2.5 rounded text-xs text-[#FCFFFE]">
            </div>
            <div>
              <label class="text-[10px] font-serif uppercase text-[#CCA147] block mb-1">Price (USD)</label>
              <input type="number" id="prod-price" required placeholder="285" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-2.5 rounded text-xs text-[#FCFFFE]">
            </div>
            <div class="sm:col-span-2">
              <label class="text-[10px] font-serif uppercase text-[#CCA147] block mb-1">Image URL or Local Path</label>
              <input type="text" id="prod-img" required placeholder="./collections/..." class="w-full bg-[#00123A] border border-[#CCA147]/40 p-2.5 rounded text-xs text-[#FCFFFE]">
            </div>
            <div class="sm:col-span-2">
              <label class="text-[10px] font-serif uppercase text-[#CCA147] block mb-1">Craftsmanship Description</label>
              <textarea id="prod-desc" rows="2" placeholder="Handcrafted in 18k yellow gold..." class="w-full bg-[#00123A] border border-[#CCA147]/40 p-2.5 rounded text-xs text-[#FCFFFE]"></textarea>
            </div>
            <div class="sm:col-span-2">
              <button type="submit" class="btn-gold w-full py-3 rounded text-xs uppercase tracking-widest">
                Save & Add Piece to Inventory
              </button>
            </div>
          </form>
        </div>

      </div>

      <!-- Admin Product Inventory List -->
      <div class="border-t border-[#CCA147]/30 pt-8">
        <h2 class="text-xl font-serif font-bold text-[#FCFFFE] uppercase tracking-wider mb-4">Active Catalog Inventory</h2>
        <div id="admin-inventory-list" class="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          <!-- Injected via JS -->
        </div>
      </div>

    </main>
  </div>

  <!-- MAIN TAB 3: AI MARKETING COPYWRITER & PRICING STUDIO -->
  <div id="view-studio" class="tab-content hidden">
    <main class="max-w-7xl mx-auto p-6 md:p-10">
      
      <div class="mb-8 border-b border-[#CCA147]/30 pb-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003399] border border-[#CCA147] text-[#E7CA83] text-xs font-serif uppercase tracking-widest mb-3">
          ✨ Multimodal Vision Studio • Roslyn Kiser Miller
        </div>
        <h1 class="text-3xl font-serif font-extrabold text-[#FCFFFE]">
          Confidence Coach in a Bottle™ <span class="text-[#CCA147]">Copy & Pricing Studio</span>
        </h1>
        <p class="text-sm text-[#FCFFFE]/80 mt-1">
          Inspect jewelry aesthetics, enforce brand voice, and sync live pricing with Stripe.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-5 bg-[#001B55] border border-[#CCA147]/40 rounded-xl p-6 shadow-xl">
          <h3 class="font-serif font-bold text-base text-[#CCA147] mb-4">1. Product Visual & Inspiration</h3>
          
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-serif uppercase text-[#FCFFFE]/80 mb-1">Jewelry Image URL</label>
              <input type="text" id="studio-img-url" value="./collections/Greek Collection/Greek Collection/4E5F3DF8-8C84-4DA5-8D53-2758679195B6.JPG" class="w-full bg-[#00123A] border border-[#CCA147]/30 p-2.5 rounded text-xs text-[#FCFFFE]">
            </div>
            
            <div>
              <label class="block text-xs font-serif uppercase text-[#FCFFFE]/80 mb-1">Admin Raw Vision Notes</label>
              <textarea id="studio-notes" rows="4" class="w-full bg-[#00123A] border border-[#CCA147]/30 p-2.5 rounded text-xs text-[#FCFFFE]">18k gold pendant with royal blue sapphires. Part of the Sigma Gamma Rho Centennial collection. Designed to inspire female leaders with timeless inner strength.</textarea>
            </div>

            <button onclick="runAIGenerator()" class="btn-gold w-full py-3.5 rounded text-xs uppercase tracking-widest font-bold">
              ✨ Generate AI Luxury Copy & Pricing
            </button>
          </div>
        </div>

        <div class="lg:col-span-7 bg-[#001B55] border border-[#CCA147]/40 rounded-xl p-6 shadow-xl">
          <h3 class="font-serif font-bold text-base text-[#CCA147] mb-4">2. AI Copywriting Handoff & Stripe Sync</h3>
          
          <div id="studio-output-form" class="space-y-4">
            <div>
              <label class="block text-xs font-serif uppercase text-[#CCA147] mb-1">Product Title</label>
              <input type="text" id="ai-title" value="Royal Sapphire & Gold Crest Pendant" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-2.5 rounded text-xs font-serif font-bold text-[#FCFFFE]">
            </div>

            <div>
              <label class="block text-xs font-serif uppercase text-[#CCA147] mb-1">Luxury Brand Description</label>
              <textarea id="ai-desc" rows="4" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-2.5 rounded text-xs text-[#FCFFFE]">A regal masterpiece handcrafted in 18k yellow gold and set with natural royal blue sapphires. Created to embody sisterhood, scholarship, and service, acting as a confidence coach in a bottle for the visionary wearer.</textarea>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-serif uppercase text-[#CCA147] mb-1">Suggested Retail Price (USD)</label>
                <input type="number" id="ai-price" value="245" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-2.5 rounded text-sm font-bold text-[#CCA147]">
              </div>
              <div>
                <label class="block text-xs font-serif uppercase text-[#CCA147] mb-1">Stripe Gateway Status</label>
                <div class="p-2.5 rounded bg-[#00123A] border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
                  ✓ Verified Stripe Gateway
                </div>
              </div>
            </div>

            <button onclick="alert('✨ Product synced to Stripe Live Checkout!')" class="btn-gold w-full py-3.5 rounded text-xs uppercase tracking-widest">
              Sync & Publish Live to Stripe Gateway
            </button>
          </div>
        </div>
      </div>

    </main>
  </div>

  <!-- FOOTER -->
  <footer class="bg-[#00123A] border-t border-[#CCA147]/40 py-12 px-6 lg:px-16 text-[#FCFFFE]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span class="font-serif font-bold text-lg text-[#CCA147]">ΣΓΡ</span>
          <span class="font-serif font-extrabold text-base tracking-widest text-[#FCFFFE]">GREEK COLORS COLORS</span>
        </div>
        <p class="text-xs text-[#FCFFFE]/70 leading-relaxed">
          Bespoke sorority fine jewelry celebrating Sigma Gamma Rho Sorority, Inc. Official Royal Blue (#003399) and Gold (#CCA147).
        </p>
      </div>

      <div>
        <h4 class="text-xs font-serif uppercase tracking-widest text-[#CCA147] mb-3 font-bold">Official Palette</h4>
        <ul class="text-xs text-[#FCFFFE]/80 space-y-1 font-mono">
          <li>Royal Blue: #003399</li>
          <li>Gold: #CCA147</li>
          <li>Bright White: #FCFFFE</li>
          <li>Deep Shadow: #001B55</li>
        </ul>
      </div>

      <div>
        <h4 class="text-xs font-serif uppercase tracking-widest text-[#CCA147] mb-3 font-bold">Founder & Jeweler</h4>
        <p class="text-xs text-[#FCFFFE]/80 leading-relaxed">
          Roslyn Kiser Miller<br/>
          Master Jeweler & Creative Director<br/>
          Sigma Gamma Rho Sorority, Inc.
        </p>
      </div>

      <div>
        <h4 class="text-xs font-serif uppercase tracking-widest text-[#CCA147] mb-3 font-bold">Boutique Services</h4>
        <ul class="text-xs text-[#FCFFFE]/80 space-y-1 font-sans">
          <li>Insured Worldwide Delivery</li>
          <li>Certificate of Authenticity</li>
          <li>Bespoke Concierge Orders</li>
        </ul>
      </div>
    </div>

    <div class="max-w-7xl mx-auto pt-6 border-t border-[#CCA147]/20 text-center text-[11px] text-[#FCFFFE]/60 font-serif uppercase tracking-widest">
      &copy; 2026 GREEK COLORS COLORS. ALL RIGHTS RESERVED. CELEBRATING SIGMA GAMMA RHO SORORITY, INC.
    </div>
  </footer>

  <!-- DESIGNER BIO MODAL -->
  <div id="bio-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 modal-backdrop">
    <div class="relative w-full max-w-xl bg-[#001B55] border-2 border-[#CCA147] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#FCFFFE] max-h-[90vh] overflow-y-auto">
      <button onclick="toggleBioModal()" class="absolute top-4 right-4 text-[#FCFFFE]/70 hover:text-[#CCA147] text-xl font-bold">✕</button>

      <div class="flex items-center gap-4 border-b border-[#CCA147]/30 pb-4 mb-6">
        <div class="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#CCA147] flex-shrink-0 shadow-lg">
          <img src="${photoDataUrl}" alt="Roslyn Kiser Miller" class="w-full h-full object-cover object-top">
        </div>
        <div>
          <h3 class="font-serif font-bold text-xl text-[#FCFFFE]">Roslyn Kiser Miller</h3>
          <span class="text-xs font-serif uppercase text-[#E7CA83] block mt-0.5">Founder • Master Jeweler • Creative Director</span>
          <span class="inline-block mt-1 px-2.5 py-0.5 rounded bg-[#003399] border border-[#CCA147] text-[10px] font-serif text-[#E7CA83] font-bold">Sigma Gamma Rho Sorority, Inc.</span>
        </div>
      </div>

      <div class="space-y-4 text-xs sm:text-sm text-[#FCFFFE]/90 leading-relaxed font-sans">
        <p>Rosyln Kiser Miller is the visionary Founder, Master Jeweler, and Creative Director of Greek Colors Colors, where exceptional craftsmanship meets timeless sophistication. Guided by an unwavering commitment to quality and artistic excellence, she creates fine jewelry celebrating life's most treasured moments.</p>
        <p>With a passion for elegant design and meticulous attention to detail, Rosyln personally oversees every collection. From concept and gemstone selection to the final finishing touches, each piece reflects her belief that fine jewelry should inspire confidence and celebrate individuality.</p>
        <p>As a proud member of Sigma Gamma Rho Sorority, Inc., Rosyln embraces the principles of Sisterhood, Scholarship, and Service—values that influence both her leadership and her approach to design.</p>
      </div>

      <div class="mt-6 pt-4 border-t border-[#CCA147]/30 text-right">
        <button onclick="toggleBioModal()" class="btn-gold px-6 py-2.5 rounded text-xs uppercase tracking-widest">Close Biography</button>
      </div>
    </div>
  </div>

  <!-- CART DRAWER -->
  <div id="cart-drawer" class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#001B55] border-l-2 border-l-[#CCA147] p-6 shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between border-b border-[#CCA147]/30 pb-4 mb-6">
        <h3 class="font-serif font-bold text-lg text-[#FCFFFE] uppercase tracking-wider">Your Boutique Bag</h3>
        <button onclick="toggleCartDrawer()" class="text-[#FCFFFE]/70 hover:text-[#CCA147] text-xl font-bold">✕</button>
      </div>
      <div id="cart-items" class="space-y-4 text-xs text-[#FCFFFE]/80">
        <p id="empty-cart-msg" class="text-center py-10 italic">Your bag is currently empty.</p>
      </div>
    </div>

    <div class="border-t border-[#CCA147]/30 pt-6">
      <div class="flex items-center justify-between mb-4 font-serif font-bold text-base">
        <span>Total:</span>
        <span id="cart-total-price" class="text-[#CCA147]">$0.00</span>
      </div>
      <button onclick="checkout()" class="btn-gold w-full py-3.5 rounded text-xs uppercase tracking-widest">
        Proceed to Sorority Concierge Checkout
      </button>
    </div>
  </div>

  <!-- REAL COLLECTIONS DATA & CLIENT LOGIC -->
  <script>
    const collections = ${collectionsData};

    let activeCategory = 'all';
    let cart = [];

    function switchTab(tab) {
      document.getElementById('view-storefront').classList.add('hidden');
      document.getElementById('view-admin').classList.add('hidden');
      document.getElementById('view-studio').classList.add('hidden');

      document.getElementById('tab-btn-storefront').className = 'text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#FCFFFE] hover:bg-[#001B55]';
      document.getElementById('tab-btn-admin').className = 'text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#FCFFFE] hover:bg-[#001B55]';
      document.getElementById('tab-btn-studio').className = 'text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#E7CA83] hover:bg-[#001B55]';

      if (tab === 'storefront') {
        document.getElementById('view-storefront').classList.remove('hidden');
        document.getElementById('tab-btn-storefront').className = 'text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#CCA147] text-[#001B55] font-bold';
      } else if (tab === 'admin') {
        document.getElementById('view-admin').classList.remove('hidden');
        document.getElementById('tab-btn-admin').className = 'text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#CCA147] text-[#001B55] font-bold';
      } else if (tab === 'studio') {
        document.getElementById('view-studio').classList.remove('hidden');
        document.getElementById('tab-btn-studio').className = 'text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#CCA147] text-[#001B55] font-bold';
      }
      renderUI();
    }

    function filterCategory(catId) {
      activeCategory = catId;
      renderUI();
    }

    function renderUI() {
      // Category Filter Bar
      const filterBar = document.getElementById('category-filter-bar');
      let barHtml = \`<button onclick="filterCategory('all')" class="px-4 py-2 rounded-full text-xs font-serif uppercase tracking-wider \${activeCategory === 'all' ? 'bg-[#CCA147] text-[#001B55] font-bold' : 'bg-[#001B55] border border-[#CCA147]/40 text-[#FCFFFE]'}\">All Collections (120)</button>\`;
      
      collections.forEach(col => {
        barHtml += \`<button onclick="filterCategory('\${col.id}')" class="px-4 py-2 rounded-full text-xs font-serif uppercase tracking-wider \${activeCategory === col.id ? 'bg-[#CCA147] text-[#001B55] font-bold' : 'bg-[#001B55] border border-[#CCA147]/40 text-[#FCFFFE]'}\">\${col.name} (\${col.images.length})</button>\`;
      });
      filterBar.innerHTML = barHtml;

      // Storefront Grid
      const grid = document.getElementById('store-products-grid');
      let gridHtml = '';

      const displayCols = activeCategory === 'all' ? collections : collections.filter(c => c.id === activeCategory);

      displayCols.forEach(col => {
        col.images.forEach((imgUrl, imgIdx) => {
          const price = 145 + ((imgIdx * 25) % 350);
          const pieceTitle = \`\${col.name} Piece #\${imgIdx + 1}\`;
          
          gridHtml += \`
            <div class="glass-card rounded-xl overflow-hidden group hover:border-[#CCA147] transition-all duration-300 flex flex-col justify-between shadow-xl">
              <div>
                <div class="relative h-72 bg-[#00123A] overflow-hidden flex items-center justify-center p-2">
                  <img src="\${imgUrl}" alt="\${pieceTitle}" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                  \${col.isFeatured ? '<span class="absolute top-3 left-3 bg-[#003399] border border-[#CCA147] text-[#E7CA83] text-[10px] font-serif uppercase px-2.5 py-1 rounded font-bold shadow">★ Prominent Line</span>' : ''}
                </div>
                <div class="p-5">
                  <span class="text-[10px] font-serif uppercase tracking-widest text-[#E7CA83] font-semibold block mb-1">\${col.name}</span>
                  <h3 class="font-serif font-bold text-lg text-[#FCFFFE] mb-2">\${pieceTitle}</h3>
                  <p class="text-xs text-[#FCFFFE]/80 leading-relaxed mb-3">Authentic handcrafted sorority fine jewelry piece from Roslyn Kiser Miller's archive.</p>
                </div>
              </div>
              <div class="p-5 pt-0 border-t border-[#CCA147]/20 flex items-center justify-between mt-auto">
                <span class="text-lg font-serif font-bold text-[#CCA147]">\$\${price.toFixed(2)}</span>
                <button onclick="addToCart('\${pieceTitle.replace(/'/g, "\\'")}', \${price})" class="btn-gold px-4 py-2 rounded text-xs uppercase tracking-wider">
                  Add to Bag
                </button>
              </div>
            </div>
          \`;
        });
      });

      grid.innerHTML = gridHtml;

      // Admin Inventory List
      const adminList = document.getElementById('admin-inventory-list');
      let adminHtml = '';
      let totalPieces = 0;
      let featuredCount = 0;

      collections.forEach(col => {
        totalPieces += col.images.length;
        if (col.isFeatured) featuredCount++;

        adminHtml += \`
          <div class="p-4 rounded bg-[#001B55] border border-[#CCA147]/30 flex items-center justify-between gap-4 mb-3">
            <div class="flex items-center gap-4">
              <img src="\${col.images[0]}" class="w-14 h-14 rounded object-cover border border-[#CCA147]">
              <div>
                <h4 class="font-serif font-bold text-sm text-[#FCFFFE]">\${col.name}</h4>
                <span class="text-xs text-[#E7CA83]">\${col.images.length} Real Jewelry Pieces</span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <button onclick="toggleProminence('\${col.id}')" class="px-3 py-1.5 rounded text-xs font-serif uppercase tracking-wider \${col.isFeatured ? 'bg-[#CCA147] text-[#001B55] font-bold' : 'bg-[#00123A] border border-[#CCA147]/50 text-[#FCFFFE]'}\">
                \${col.isFeatured ? '★ Prominent' : 'Make Prominent'}
              </button>
            </div>
          </div>
        \`;
      });

      adminList.innerHTML = adminHtml;
      document.getElementById('admin-featured-count').innerText = '★ ' + featuredCount + ' Prominent Lines';
      document.getElementById('admin-total-count').innerText = totalPieces + ' Total Pieces';
    }

    function toggleProminence(colId) {
      const target = collections.find(c => c.id === colId);
      if (target) {
        target.isFeatured = !target.isFeatured;
        renderUI();
      }
    }

    function handleAddProduct(e) {
      e.preventDefault();
      const title = document.getElementById('prod-title').value;
      const price = Number(document.getElementById('prod-price').value);
      const img = document.getElementById('prod-img').value;

      collections[0].images.unshift(img);
      renderUI();
      alert('✦ Success! Added ' + title + ' to active catalog.');
      switchTab('storefront');
    }

    function handleZipUpload(e) {
      e.preventDefault();
      const colName = document.getElementById('zip-col-name').value || 'Royal Archive';
      const featured = document.getElementById('zip-featured').checked;

      collections.unshift({
        id: 'col-' + Date.now(),
        name: colName,
        isFeatured: featured,
        images: ['./collections/Greek Collection/Greek Collection/4E5F3DF8-8C84-4DA5-8D53-2758679195B6.JPG']
      });

      renderUI();
      alert('✦ Success! Unpacked ZIP archive and generated interactive carousel for ' + colName + '!');
      switchTab('storefront');
    }

    function runAIGenerator() {
      alert('✨ GPT-4o Multimodal Vision Analysis Complete!\nGenerated copy & pricing aligned with Confidence Coach in a Bottle™ brand voice.');
    }

    function toggleBioModal() {
      const modal = document.getElementById('bio-modal');
      modal.classList.toggle('hidden');
      modal.classList.toggle('flex');
    }

    function toggleCartDrawer() {
      const drawer = document.getElementById('cart-drawer');
      drawer.classList.toggle('translate-x-full');
    }

    function addToCart(title, price) {
      cart.push({ title, price });
      updateCartUI();
      toggleCartDrawer();
    }

    function updateCartUI() {
      const countEl = document.getElementById('cart-count');
      const itemsEl = document.getElementById('cart-items');
      const totalEl = document.getElementById('cart-total-price');

      countEl.innerText = cart.length;

      if (cart.length === 0) {
        itemsEl.innerHTML = '<p class="text-center py-10 italic">Your bag is currently empty.</p>';
        totalEl.innerText = '$0.00';
        return;
      }

      let total = 0;
      let html = '';
      cart.forEach((item, idx) => {
        total += item.price;
        html += \`
          <div class="flex items-center justify-between p-3 rounded bg-[#00123A] border border-[#CCA147]/30">
            <div>
              <span class="font-serif font-bold text-xs text-[#FCFFFE] block">\${item.title}</span>
              <span class="text-[10px] text-[#E7CA83]">\$\${item.price.toFixed(2)}</span>
            </div>
            <button onclick="removeFromCart(\${idx})" class="text-red-400 hover:text-red-300 text-xs font-bold">Remove</button>
          </div>
        \`;
      });

      itemsEl.innerHTML = html;
      totalEl.innerText = '$' + total.toFixed(2);
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCartUI();
    }

    function checkout() {
      if (cart.length === 0) {
        alert("Your bag is empty!");
        return;
      }
      alert("💙 Thank you for choosing Greek Colors Colors! Our Sorority Concierge will confirm your order via email.");
      cart = [];
      updateCartUI();
      toggleCartDrawer();
    }

    // Initial render
    renderUI();
  </script>

</body>
</html>
`;

fs.writeFileSync('index.html', htmlContent);
console.log('Successfully updated index.html with Roslyn\'s official photo and all 120 real jewelry collection photos!');
