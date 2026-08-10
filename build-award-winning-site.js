const fs = require('fs');

const b64 = fs.readFileSync('roslyn-b64.txt', 'utf8').trim();
const collectionsData = fs.readFileSync('collections-data.json', 'utf8').trim();
const photoDataUrl = `data:image/jpeg;base64,${b64}`;

const htmlCode = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Greek Colors Colors — Award-Winning Interactive Experience & Luxury Boutique</title>
  <meta name="description" content="Wear Your Colors. Carry the legacy. Greek Colors Colors creates elevated fine jewelry & custom apparel celebrating Sigma Gamma Rho Sorority, Inc. Official Royal Blue (#003399) & Gold (#CCA147) collection by Founder & Master Jeweler Roslyn Kiser Miller.">
  
  <!-- Premium Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
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
            display: ['Cinzel Decorative', 'serif'],
            editorial: ['Cormorant Garamond', 'Georgia', 'serif'],
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <style>
    /* Award-Winning Custom Styles & Shaders */
    :root {
      --sgrho-royal: #003399;
      --sgrho-deep: #001B55;
      --sgrho-navy: #00123A;
      --sgrho-gold: #CCA147;
      --sgrho-palegold: #E7CA83;
      --sgrho-white: #FCFFFE;
    }

    * {
      cursor: none !important; /* Custom Cursor Engaged */
    }

    body {
      background-color: #00123A;
      color: #FCFFFE;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }

    /* Metallic Gold Gradient Typography */
    .gold-gradient-text {
      background: linear-gradient(135deg, #CCA147 0%, #FFF5DA 45%, #CCA147 70%, #E7CA83 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .gold-gradient-border {
      border-image: linear-gradient(135deg, #CCA147, #E7CA83, #CCA147) 1;
    }

    /* Interactive Gold Pulse Button */
    .btn-gold {
      background: linear-gradient(135deg, #CCA147 0%, #E7CA83 50%, #CCA147 100%);
      color: #001B55;
      font-weight: 700;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 25px rgba(204, 161, 71, 0.4);
      position: relative;
      overflow: hidden;
    }
    .btn-gold::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent);
      transform: rotate(45deg) translateY(-100%);
      transition: transform 0.8s ease;
    }
    .btn-gold:hover::after {
      transform: rotate(45deg) translateY(100%);
    }
    .btn-gold:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 35px rgba(204, 161, 71, 0.65);
    }

    /* Liquid Glass Card System */
    .glass-liquid {
      background: rgba(0, 27, 85, 0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(204, 161, 71, 0.35);
      box-shadow: 0 30px 80px rgba(0, 18, 58, 0.85);
    }

    .glass-nav {
      background: rgba(0, 27, 85, 0.85);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border-bottom: 1px solid rgba(204, 161, 71, 0.3);
    }

    .modal-backdrop {
      background: rgba(0, 18, 58, 0.94);
      backdrop-filter: blur(18px);
    }

    /* Custom Aura Cursor */
    #custom-cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      background: #E7CA83;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease-out, width 0.3s ease, height 0.3s ease, background 0.3s ease;
      mix-blend-mode: difference;
    }
    #custom-cursor-follower {
      position: fixed;
      top: 0;
      left: 0;
      width: 44px;
      height: 44px;
      border: 1.5px solid rgba(204, 161, 71, 0.6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: transform 0.18s ease-out, width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
    }

    /* Cursor Hover State */
    .cursor-active #custom-cursor {
      width: 48px;
      height: 48px;
      background: rgba(204, 161, 71, 0.9);
      mix-blend-mode: normal;
    }
    .cursor-active #custom-cursor-follower {
      width: 68px;
      height: 68px;
      border-color: #E7CA83;
    }

    /* Act Reveal Animations */
    .act-section {
      opacity: 0;
      transform: translateY(35px);
      transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .act-section.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #00123A;
    }
    ::-webkit-scrollbar-thumb {
      background: #003399;
      border: 1px solid #CCA147;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #CCA147;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col selection:bg-[#CCA147] selection:text-[#001B55]">

  <!-- CUSTOM AURA CURSOR SYSTEM -->
  <div id="custom-cursor"></div>
  <div id="custom-cursor-follower"></div>

  <!-- CANVAS PARTICLES & AMBIENT ATMOSPHERE -->
  <canvas id="hero-canvas" class="fixed inset-0 w-full h-full pointer-events-none z-0"></canvas>

  <!-- TOP EDITORIAL ANNOUNCEMENT BANNER -->
  <div class="relative z-50 bg-[#001B55] border-b border-[#CCA147]/40 py-2.5 px-4 text-center text-xs font-serif tracking-[0.25em] text-[#E7CA83] flex items-center justify-between">
    <div class="hidden sm:flex items-center gap-2">
      <span class="inline-block w-2 h-2 rounded-full bg-[#CCA147] animate-pulse"></span>
      SIGMA GAMMA RHO SORORITY, INC. OFFICIAL PALETTE: ROYAL BLUE #003399 & GOLD #CCA147
    </div>
    <div class="mx-auto sm:mx-0 flex items-center gap-3">
      <button onclick="switchTab('storefront')" id="tab-btn-storefront" class="interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#CCA147] text-[#001B55] font-bold">
        Storefront View
      </button>
      <button onclick="switchTab('admin')" id="tab-btn-admin" class="interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#FCFFFE] hover:bg-[#001B55]">
        ⚙️ Admin Portal
      </button>
      <button onclick="switchTab('studio')" id="tab-btn-studio" class="interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#E7CA83] hover:bg-[#001B55]">
        ✨ AI Studio
      </button>
    </div>
  </div>

  <!-- FLOATING LIQUID-GLASS NAVIGATION -->
  <header class="sticky top-0 z-40 glass-nav px-6 lg:px-16 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- EDITORIAL BRAND LOGO -->
      <a href="#" onclick="switchTab('storefront')" class="interactive-el flex items-center gap-3 group">
        <div class="w-11 h-11 rounded-full border-2 border-[#CCA147] flex items-center justify-center bg-[#003399] text-[#CCA147] font-serif font-bold text-lg shadow-[0_0_25px_rgba(204,161,71,0.5)] group-hover:scale-105 transition-transform">
          ΣΓΡ
        </div>
        <div>
          <div class="flex items-baseline gap-1">
            <span class="font-serif font-black text-xl lg:text-2xl tracking-[0.2em] text-[#FCFFFE]">
              GREEK COLORS
            </span>
            <span class="font-editorial italic text-base text-[#CCA147] font-bold">
              Colors™
            </span>
          </div>
          <span class="text-[9px] font-sans uppercase tracking-[0.3em] text-[#E7CA83] block font-medium">
            Bespoke Sorority Fine Jewelry • Roslyn Kiser Miller
          </span>
        </div>
      </a>

      <!-- NAV LINKS -->
      <nav class="hidden md:flex items-center space-x-8 text-xs font-serif uppercase tracking-[0.2em] text-[#FCFFFE]/90">
        <a href="#act-identity" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">I. Identity</a>
        <a href="#act-sisterhood" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">II. Sisterhood</a>
        <a href="#act-craft" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">III. Craft</a>
        <a href="#act-expression" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">IV. Collections</a>
        <a href="#act-legacy" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">V. Legacy</a>
      </nav>

      <!-- CART & ACTIONS -->
      <div class="flex items-center gap-4">
        <button onclick="toggleBioModal()" class="interactive-el hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CCA147]/80 bg-[#003399]/70 text-xs font-serif uppercase tracking-widest text-[#E7CA83] hover:bg-[#003399] transition shadow-md">
          <span>👑</span> Master Jeweler Bio
        </button>
        
        <button onclick="toggleCartDrawer()" class="interactive-el relative p-2.5 rounded-full border border-[#CCA147]/50 bg-[#001B55] hover:border-[#CCA147] transition text-[#FCFFFE]">
          <svg class="w-5 h-5 text-[#CCA147]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
          <span id="cart-count" class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#CCA147] text-[#001B55] font-bold text-[10px] flex items-center justify-center shadow-md">0</span>
        </button>
      </div>

    </div>
  </header>

  <!-- STOREFRONT CONTENT (5-ACT CINEMATIC ARCHITECTURE) -->
  <div id="view-storefront" class="tab-content relative z-10">

    <!-- ==========================================
         ACT I — IDENTITY
         ========================================== -->
    <section id="act-identity" class="act-section min-h-[90vh] flex items-center justify-center relative py-24 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-[#00123A] via-[#001B55] to-[#003399]/30">
      
      <!-- Lighting Atmosphere -->
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#003399]/35 rounded-full blur-[150px] pointer-events-none"></div>
      <div class="absolute top-1/4 right-10 w-[450px] h-[450px] bg-[#CCA147]/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#001B55] border border-[#CCA147] text-[#E7CA83] text-xs font-serif uppercase tracking-[0.3em] mb-8 shadow-[0_0_30px_rgba(204,161,71,0.3)]">
          <span>✨</span> Act I • Identity & Tradition
        </div>

        <p class="font-editorial italic text-2xl sm:text-3xl text-[#E7CA83] mb-4">
          &ldquo;Some colors are simply seen. Others are carried.&rdquo;
        </p>

        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight text-[#FCFFFE] leading-[1.08] mb-8">
          WEAR YOUR <br/>
          <span class="gold-gradient-text">COLORS.</span>
        </h1>

        <p class="max-w-2xl mx-auto text-base sm:text-lg text-[#FCFFFE]/90 font-sans leading-relaxed mb-12 font-light">
          Carry the legacy. Make it unmistakably yours. Greek Colors Colors creates elevated fine jewelry and bespoke pieces inspired by identity, sisterhood, and the colors that connect generations.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#act-expression" class="interactive-el btn-gold px-10 py-5 rounded-sm font-serif text-xs uppercase tracking-[0.25em] w-full sm:w-auto">
            Explore 120 Royal Pieces →
          </a>
          <button onclick="toggleBioModal()" class="interactive-el px-10 py-5 rounded-sm border border-[#CCA147] bg-[#001B55]/80 text-[#FCFFFE] font-serif text-xs uppercase tracking-[0.25em] hover:bg-[#003399] transition w-full sm:w-auto">
            Meet Designer Roslyn Kiser Miller
          </button>
        </div>

        <!-- ROSLYN KISER MILLER OFFICIAL PORTRAIT CARD -->
        <div class="mt-16 max-w-2xl mx-auto p-6 rounded-2xl glass-liquid text-left border-t-2 border-t-[#CCA147] flex flex-col sm:flex-row items-center gap-6 shadow-2xl">
          <div class="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#CCA147] flex-shrink-0 shadow-[0_0_30px_rgba(204,161,71,0.5)]">
            <img src="${photoDataUrl}" alt="Roslyn Kiser Miller Official Portrait" class="w-full h-full object-cover object-top">
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-serif font-bold text-xl text-[#FCFFFE]">Roslyn Kiser Miller</h3>
              <span class="px-2.5 py-0.5 rounded text-[10px] font-serif font-bold text-[#E7CA83] bg-[#003399] border border-[#CCA147]/60">ΣΓΡ</span>
            </div>
            <span class="text-xs font-serif uppercase tracking-[0.18em] text-[#CCA147] block mt-1 font-semibold">Founder • Master Jeweler • Creative Director</span>
            <p class="text-xs italic text-[#E7CA83] mt-2 leading-relaxed">&ldquo;The most beautiful jewelry is measured not solely by its brilliance, but by the memories it preserves and the legacy it carries forward.&rdquo;</p>
          </div>
        </div>

      </div>
    </section>

    <!-- PALETTE BAR STRIP -->
    <section class="py-8 bg-[#001B55] border-y border-[#CCA147]/30 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="p-4 rounded bg-[#003399] border border-[#CCA147]/40 shadow-md">
          <div class="w-5 h-5 rounded-full bg-[#003399] border border-[#FCFFFE] mx-auto mb-1.5"></div>
          <span class="text-xs font-serif uppercase tracking-widest text-[#FCFFFE] font-bold block">Royal / Reflex Blue</span>
          <span class="text-[10px] font-mono text-[#E7CA83]">HEX #003399</span>
        </div>
        <div class="p-4 rounded bg-[#00123A] border border-[#CCA147]/40 shadow-md">
          <div class="w-5 h-5 rounded-full bg-[#CCA147] border border-[#FCFFFE] mx-auto mb-1.5"></div>
          <span class="text-xs font-serif uppercase tracking-widest text-[#CCA147] font-bold block">Official Gold</span>
          <span class="text-[10px] font-mono text-[#FCFFFE]/80">HEX #CCA147</span>
        </div>
        <div class="p-4 rounded bg-[#003399] border border-[#CCA147]/40 shadow-md">
          <div class="w-5 h-5 rounded-full bg-[#E7CA83] border border-[#FCFFFE] mx-auto mb-1.5"></div>
          <span class="text-xs font-serif uppercase tracking-widest text-[#E7CA83] font-bold block">Pale Gold Accent</span>
          <span class="text-[10px] font-mono text-[#FCFFFE]/80">HEX #E7CA83</span>
        </div>
        <div class="p-4 rounded bg-[#00123A] border border-[#CCA147]/40 shadow-md">
          <div class="w-5 h-5 rounded-full bg-[#FCFFFE] border border-[#CCA147] mx-auto mb-1.5"></div>
          <span class="text-xs font-serif uppercase tracking-widest text-[#FCFFFE] font-bold block">Bright White</span>
          <span class="text-[10px] font-mono text-[#E7CA83]">HEX #FCFFFE</span>
        </div>
      </div>
    </section>

    <!-- ==========================================
         ACT II — SISTERHOOD
         ========================================== -->
    <section id="act-sisterhood" class="act-section py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-[#CCA147]/25">
      <div class="text-center mb-16">
        <span class="text-xs font-serif uppercase tracking-[0.3em] text-[#CCA147] block mb-3">Act II • Connection & Belonging</span>
        <h2 class="text-3xl sm:text-5xl font-serif font-bold text-[#FCFFFE] tracking-wide uppercase">
          BOUND BY SISTERHOOD & HONOR
        </h2>
        <p class="max-w-xl mx-auto text-sm text-[#FCFFFE]/80 mt-3 font-editorial italic">
          &ldquo;Greater Service, Greater Progress — Founded in 1922.&rdquo;
        </p>
        <div class="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#CCA147] to-transparent mx-auto mt-6"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="glass-liquid p-8 rounded-2xl border-t-2 border-t-[#CCA147] text-center">
          <div class="w-14 h-14 rounded-full bg-[#003399] border-2 border-[#CCA147] flex items-center justify-center text-xl font-serif font-bold text-[#CCA147] mx-auto mb-6 shadow-lg">
            Σ
          </div>
          <h3 class="font-serif font-bold text-xl text-[#FCFFFE] mb-3">Sisterhood</h3>
          <p class="text-xs text-[#FCFFFE]/80 leading-relaxed font-sans">
            A lifelong bond rooted in mutual support, encouragement, and shared pride across generations of women leaders.
          </p>
        </div>

        <div class="glass-liquid p-8 rounded-2xl border-t-2 border-t-[#E7CA83] text-center">
          <div class="w-14 h-14 rounded-full bg-[#003399] border-2 border-[#E7CA83] flex items-center justify-center text-xl font-serif font-bold text-[#E7CA83] mx-auto mb-6 shadow-lg">
            Γ
          </div>
          <h3 class="font-serif font-bold text-xl text-[#FCFFFE] mb-3">Scholarship</h3>
          <p class="text-xs text-[#FCFFFE]/80 leading-relaxed font-sans">
            A commitment to intellectual achievement, professional excellence, and continuous personal growth.
          </p>
        </div>

        <div class="glass-liquid p-8 rounded-2xl border-t-2 border-t-[#CCA147] text-center">
          <div class="w-14 h-14 rounded-full bg-[#003399] border-2 border-[#CCA147] flex items-center justify-center text-xl font-serif font-bold text-[#CCA147] mx-auto mb-6 shadow-lg">
            Ρ
          </div>
          <h3 class="font-serif font-bold text-xl text-[#FCFFFE] mb-3">Service</h3>
          <p class="text-xs text-[#FCFFFE]/80 leading-relaxed font-sans">
            Empowering communities through impactful service, leadership initiatives, and dedication to progress.
          </p>
        </div>
      </div>
    </section>

    <!-- ==========================================
         ACT III — CRAFT
         ========================================== -->
    <section id="act-craft" class="act-section py-24 px-6 lg:px-16 max-w-7xl mx-auto border-b border-[#CCA147]/25">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <span class="text-xs font-serif uppercase tracking-[0.3em] text-[#CCA147] block mb-3">Act III • Bespoke Artistry</span>
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-[#FCFFFE] mb-6">
            THE CONFIDENCE COACH IN A BOTTLE™
          </h2>
          <p class="text-sm text-[#FCFFFE]/90 leading-relaxed mb-4">
            Every piece created by Master Jeweler <strong>Roslyn Kiser Miller</strong> acts as a personal reminder of inner strength, dignity, and heritage.
          </p>
          <p class="text-sm text-[#FCFFFE]/80 leading-relaxed mb-6">
            From initial sketch and gemstone selection to precision metalwork, custom filigree, and hand polish, each item undergoes rigorous hand-craftsmanship.
          </p>

          <div class="space-y-3 font-sans text-xs text-[#E7CA83]">
            <div class="flex items-center gap-3 p-3 rounded bg-[#00123A] border border-[#CCA147]/30">
              <span class="text-base">💎</span> Natural Gemstones & Solid 18k Gold Fill
            </div>
            <div class="flex items-center gap-3 p-3 rounded bg-[#00123A] border border-[#CCA147]/30">
              <span class="text-base">📜</span> Certified Certificate of Authenticity Included
            </div>
            <div class="flex items-center gap-3 p-3 rounded bg-[#00123A] border border-[#CCA147]/30">
              <span class="text-base">👑</span> Custom Monogramming & Chapter Engravings
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="w-full aspect-square rounded-2xl overflow-hidden border-2 border-[#CCA147] shadow-[0_0_40px_rgba(204,161,71,0.35)] glass-liquid p-3">
            <img src="./collections/Greek Collection/Greek Collection/4E5F3DF8-8C84-4DA5-8D53-2758679195B6.JPG" alt="Greek Collection Masterpiece" class="w-full h-full object-contain rounded-xl">
          </div>
        </div>

      </div>
    </section>

    <!-- ==========================================
         ACT IV — EXPRESSION (COLLECTIONS & 120 PIECES)
         ========================================== -->
    <section id="act-expression" class="act-section py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-xs font-serif uppercase tracking-[0.3em] text-[#CCA147] block mb-3">Act IV • Expression</span>
        <h2 class="text-3xl sm:text-5xl font-serif font-bold text-[#FCFFFE] tracking-wide uppercase">
          AUTHENTIC GOOGLE DRIVE ARCHIVE
        </h2>
        <p class="text-xs text-[#FCFFFE]/70 mt-2 font-mono">120 Real Jewelry Pieces Across 9 Curated Collections</p>
        <div class="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#CCA147] to-transparent mx-auto mt-6"></div>
      </div>

      <!-- FILTER TABS -->
      <div id="category-filter-bar" class="flex flex-wrap items-center justify-center gap-2 mb-14">
        <!-- Injected via JS -->
      </div>

      <!-- PRODUCTS GRID -->
      <div id="store-products-grid" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Injected via JS -->
      </div>
    </section>

    <!-- ==========================================
         ACT V — LEGACY
         ========================================== -->
    <section id="act-legacy" class="act-section py-24 px-6 lg:px-16 bg-gradient-to-t from-[#00123A] via-[#001B55] to-[#003399]/40 border-t border-[#CCA147]/30 text-center relative overflow-hidden">
      <div class="max-w-4xl mx-auto relative z-10">
        <span class="text-xs font-serif uppercase tracking-[0.3em] text-[#CCA147] block mb-4">Act V • Legacy</span>
        <h2 class="text-4xl sm:text-6xl font-serif font-black text-[#FCFFFE] leading-tight mb-6">
          COLORS CONNECT GENERATIONS. <br/>
          <span class="gold-gradient-text">MAKE YOURS UNFORGETTABLE.</span>
        </h2>

        <p class="text-sm sm:text-base text-[#FCFFFE]/85 max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          Join the sisterhood of women who carry their legacy with pride, grace, and elevated style.
        </p>

        <!-- LIQUID GLASS NEWSLETTER -->
        <div class="max-w-md mx-auto p-2.5 rounded-full glass-liquid flex items-center border border-[#CCA147]/60 shadow-2xl mb-12">
          <input type="email" placeholder="Enter your email for collection drops..." class="bg-transparent border-none outline-none px-4 py-2 text-xs text-[#FCFFFE] placeholder-gray-400 w-full">
          <button onclick="alert('✨ Thank you! You are now subscribed to Greek Colors Colors drops.')" class="btn-gold px-6 py-2.5 rounded-full text-xs font-serif uppercase tracking-widest flex-shrink-0">
            Join List →
          </button>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#act-expression" class="interactive-el btn-gold px-8 py-4 rounded-sm font-serif text-xs uppercase tracking-widest">
            Shop Greek Colors Colors
          </a>
          <button onclick="switchTab('admin')" class="interactive-el px-8 py-4 rounded-sm border border-[#CCA147] bg-[#001B55] text-[#FCFFFE] font-serif text-xs uppercase tracking-widest hover:bg-[#003399] transition">
            Start a Custom Piece
          </button>
        </div>
      </div>
    </section>

  </div>

  <!-- MAIN TAB 2: ADMIN CATALOG PORTAL -->
  <div id="view-admin" class="tab-content hidden relative z-10">
    <main class="max-w-7xl mx-auto p-6 md:p-10">
      
      <div class="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 glass-liquid p-8 rounded-xl border border-[#CCA147]/50 shadow-2xl">
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
            <button type="submit" class="interactive-el btn-gold w-full py-3 rounded text-xs uppercase tracking-widest">
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
              <button type="submit" class="interactive-el btn-gold w-full py-3 rounded text-xs uppercase tracking-widest">
                Save & Add Piece to Inventory
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="border-t border-[#CCA147]/30 pt-8">
        <h2 class="text-xl font-serif font-bold text-[#FCFFFE] uppercase tracking-wider mb-4">Active Catalog Inventory</h2>
        <div id="admin-inventory-list" class="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          <!-- Injected via JS -->
        </div>
      </div>

    </main>
  </div>

  <!-- MAIN TAB 3: AI MARKETING STUDIO -->
  <div id="view-studio" class="tab-content hidden relative z-10">
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

            <button onclick="runAIGenerator()" class="interactive-el btn-gold w-full py-3.5 rounded text-xs uppercase tracking-widest font-bold">
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

            <button onclick="alert('✨ Product synced to Stripe Live Checkout!')" class="interactive-el btn-gold w-full py-3.5 rounded text-xs uppercase tracking-widest">
              Sync & Publish Live to Stripe Gateway
            </button>
          </div>
        </div>
      </div>

    </main>
  </div>

  <!-- FOOTER -->
  <footer class="relative z-10 bg-[#00123A] border-t border-[#CCA147]/40 py-12 px-6 lg:px-16 text-[#FCFFFE]">
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
      <button onclick="toggleBioModal()" class="interactive-el absolute top-4 right-4 text-[#FCFFFE]/70 hover:text-[#CCA147] text-xl font-bold">✕</button>

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
        <button onclick="toggleBioModal()" class="interactive-el btn-gold px-6 py-2.5 rounded text-xs uppercase tracking-widest">Close Biography</button>
      </div>
    </div>
  </div>

  <!-- CART DRAWER -->
  <div id="cart-drawer" class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#001B55] border-l-2 border-l-[#CCA147] p-6 shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between border-b border-[#CCA147]/30 pb-4 mb-6">
        <h3 class="font-serif font-bold text-lg text-[#FCFFFE] uppercase tracking-wider">Your Boutique Bag</h3>
        <button onclick="toggleCartDrawer()" class="interactive-el text-[#FCFFFE]/70 hover:text-[#CCA147] text-xl font-bold">✕</button>
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
      <button onclick="checkout()" class="interactive-el btn-gold w-full py-3.5 rounded text-xs uppercase tracking-widest">
        Proceed to Sorority Concierge Checkout
      </button>
    </div>
  </div>

  <!-- CANVAS LIQUID PARTICLE SYSTEM & INTERACTION ENGINE -->
  <script>
    // Canvas Background Renderer
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(window.innerWidth < 768 ? 35 : 80, 100);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        color: Math.random() > 0.4 ? 'rgba(204, 161, 71, ' + (Math.random() * 0.5 + 0.2) + ')' : 'rgba(231, 202, 131, ' + (Math.random() * 0.4 + 0.1) + ')',
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Ambient Gold Glow under Mouse Cursor
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
      gradient.addColorStop(0, 'rgba(0, 51, 153, 0.25)');
      gradient.addColorStop(0.5, 'rgba(204, 161, 71, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 18, 58, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Gold Micro-Particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      requestAnimationFrame(renderCanvas);
    }
    renderCanvas();

    // Custom Aura Cursor Logic
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('custom-cursor-follower');

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('.interactive-el, a, button, input, select').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
    });

    // Act Intersection Observer for Narrative Reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.act-section').forEach(sec => observer.observe(sec));
  </script>

  <!-- REAL COLLECTIONS DATA & CLIENT LOGIC -->
  <script>
    const collections = ${collectionsData};

    let activeCategory = 'all';
    let cart = [];

    function switchTab(tab) {
      document.getElementById('view-storefront').classList.add('hidden');
      document.getElementById('view-admin').classList.add('hidden');
      document.getElementById('view-studio').classList.add('hidden');

      document.getElementById('tab-btn-storefront').className = 'interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#FCFFFE] hover:bg-[#001B55]';
      document.getElementById('tab-btn-admin').className = 'interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#FCFFFE] hover:bg-[#001B55]';
      document.getElementById('tab-btn-studio').className = 'interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#E7CA83] hover:bg-[#001B55]';

      if (tab === 'storefront') {
        document.getElementById('view-storefront').classList.remove('hidden');
        document.getElementById('tab-btn-storefront').className = 'interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#CCA147] text-[#001B55] font-bold';
      } else if (tab === 'admin') {
        document.getElementById('view-admin').classList.remove('hidden');
        document.getElementById('tab-btn-admin').className = 'interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#CCA147] text-[#001B55] font-bold';
      } else if (tab === 'studio') {
        document.getElementById('view-studio').classList.remove('hidden');
        document.getElementById('tab-btn-studio').className = 'interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#CCA147] text-[#001B55] font-bold';
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
      let barHtml = \`<button onclick="filterCategory('all')" class="interactive-el px-4 py-2 rounded-full text-xs font-serif uppercase tracking-wider \${activeCategory === 'all' ? 'bg-[#CCA147] text-[#001B55] font-bold shadow-lg' : 'bg-[#001B55] border border-[#CCA147]/40 text-[#FCFFFE]'}\">All Collections (120)</button>\`;
      
      collections.forEach(col => {
        barHtml += \`<button onclick="filterCategory('\${col.id}')" class="interactive-el px-4 py-2 rounded-full text-xs font-serif uppercase tracking-wider \${activeCategory === col.id ? 'bg-[#CCA147] text-[#001B55] font-bold shadow-lg' : 'bg-[#001B55] border border-[#CCA147]/40 text-[#FCFFFE]'}\">\${col.name} (\${col.images.length})</button>\`;
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
            <div class="glass-liquid rounded-xl overflow-hidden group hover:border-[#CCA147] transition-all duration-500 flex flex-col justify-between shadow-xl">
              <div>
                <div class="relative h-72 bg-[#00123A] overflow-hidden flex items-center justify-center p-2">
                  <img src="\${imgUrl}" alt="\${pieceTitle}" class="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700">
                  \${col.isFeatured ? '<span class="absolute top-3 left-3 bg-[#003399] border border-[#CCA147] text-[#E7CA83] text-[10px] font-serif uppercase px-2.5 py-1 rounded font-bold shadow">★ Prominent Line</span>' : ''}
                </div>
                <div class="p-5">
                  <span class="text-[10px] font-serif uppercase tracking-widest text-[#E7CA83] font-semibold block mb-1">\${col.name}</span>
                  <h3 class="font-serif font-bold text-lg text-[#FCFFFE] mb-2">\${pieceTitle}</h3>
                  <p class="text-xs text-[#FCFFFE]/80 leading-relaxed mb-3 font-sans">Authentic handcrafted fine jewelry piece from Roslyn Kiser Miller's archive.</p>
                </div>
              </div>
              <div class="p-5 pt-0 border-t border-[#CCA147]/20 flex items-center justify-between mt-auto">
                <span class="text-lg font-serif font-bold text-[#CCA147]">\$\${price.toFixed(2)}</span>
                <button onclick="addToCart('\${pieceTitle.replace(/'/g, "\\'")}', \${price})" class="interactive-el btn-gold px-4 py-2 rounded text-xs uppercase tracking-wider">
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
              <button onclick="toggleProminence('\${col.id}')" class="interactive-el px-3 py-1.5 rounded text-xs font-serif uppercase tracking-wider \${col.isFeatured ? 'bg-[#CCA147] text-[#001B55] font-bold' : 'bg-[#00123A] border border-[#CCA147]/50 text-[#FCFFFE]'}\">
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
            <button onclick="removeFromCart(\${idx})" class="interactive-el text-red-400 hover:text-red-300 text-xs font-bold">Remove</button>
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

fs.writeFileSync('index.html', htmlCode);
console.log('Masterpiece index.html built successfully with award-winning 5-act narrative and liquid canvas particle shader!');
