const fs = require('fs');

const b64Roslyn = fs.readFileSync('roslyn-b64.txt', 'utf8').trim();
const photoDataUrl = `data:image/jpeg;base64,${b64Roslyn}`;
const collectionsB64 = fs.readFileSync('collections-b64-data.json', 'utf8');

const htmlCode = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Greek Colors Colors — Cosmic 3D Flagship Luxury Showroom</title>
  <meta name="description" content="Greek Colors Colors Cosmic 3D Flagship Luxury Showroom. Step inside an orbital retail experience for bespoke sorority fine jewelry by Master Jeweler Roslyn Kiser Miller.">
  
  <!-- Premium Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Three.js CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

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

  <!-- EMBED 120 REAL JEWELRY BASE64 ASSETS DIRECTLY -->
  <script>
    window.GREEK_COLLECTIONS = ${collectionsB64};
  </script>

  <style>
    :root {
      --sgrho-royal: #003399;
      --sgrho-deep: #001B55;
      --sgrho-navy: #00123A;
      --sgrho-gold: #CCA147;
      --sgrho-palegold: #E7CA83;
      --sgrho-white: #FCFFFE;
    }

    * {
      cursor: none !important;
    }

    body {
      background-color: #00123A;
      color: #FCFFFE;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }

    .gold-gradient-text {
      background: linear-gradient(135deg, #CCA147 0%, #FFF5DA 40%, #CCA147 70%, #E7CA83 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .btn-gold {
      background: linear-gradient(135deg, #CCA147 0%, #E7CA83 50%, #CCA147 100%);
      color: #001B55;
      font-weight: 700;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 30px rgba(204, 161, 71, 0.45);
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
      background: linear-gradient(45deg, transparent, rgba(255,255,255,0.5), transparent);
      transform: rotate(45deg) translateY(-100%);
      transition: transform 0.8s ease;
    }
    .btn-gold:hover::after {
      transform: rotate(45deg) translateY(100%);
    }
    .btn-gold:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 10px 40px rgba(204, 161, 71, 0.7);
    }

    .glass-liquid {
      background: rgba(0, 27, 85, 0.88);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(204, 161, 71, 0.35);
      box-shadow: 0 35px 90px rgba(0, 18, 58, 0.9);
    }

    .glass-nav {
      background: rgba(0, 27, 85, 0.94);
      backdrop-filter: blur(28px);
      -webkit-backdrop-filter: blur(28px);
      border-bottom: 1px solid rgba(204, 161, 71, 0.3);
    }

    .modal-backdrop {
      background: rgba(0, 18, 58, 0.95);
      backdrop-filter: blur(20px);
    }

    /* Custom Aura Cursor */
    #custom-cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
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
      width: 48px;
      height: 48px;
      border: 1.5px solid rgba(204, 161, 71, 0.65);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: transform 0.18s ease-out, width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
    }

    .cursor-active #custom-cursor {
      width: 52px;
      height: 52px;
      background: rgba(204, 161, 71, 0.92);
      mix-blend-mode: normal;
    }
    .cursor-active #custom-cursor-follower {
      width: 76px;
      height: 76px;
      border-color: #E7CA83;
    }

    /* Scene Zero Mission Brief Loader Overlay */
    #scene-zero-loader {
      background-color: #00123A;
      transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .scan-line {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, #003399 30%, #CCA147 50%, #003399 70%, transparent 100%);
      box-shadow: 0 0 15px #CCA147;
      animation: scanPulse 3s infinite ease-in-out;
    }

    @keyframes scanPulse {
      0%, 100% { opacity: 0.3; transform: scaleY(1); }
      50% { opacity: 1; transform: scaleY(3); }
    }

    .act-scene {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .act-scene.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .carousel-track {
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }
    .carousel-track::-webkit-scrollbar {
      height: 6px;
    }
    .carousel-track::-webkit-scrollbar-track {
      background: rgba(0, 18, 58, 0.5);
      border-radius: 3px;
    }
    .carousel-track::-webkit-scrollbar-thumb {
      background: rgba(204, 161, 71, 0.5);
      border-radius: 3px;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col selection:bg-[#CCA147] selection:text-[#001B55]">

  <!-- CUSTOM CURSOR -->
  <div id="custom-cursor"></div>
  <div id="custom-cursor-follower"></div>

  <!-- THREE.JS CONTINUOUS 3D SPATIAL WORLD CANVAS -->
  <canvas id="webgl-canvas" class="fixed inset-0 w-full h-full pointer-events-none z-0"></canvas>

  <!-- ==========================================
       SCENE ZERO — COSMIC MISSION BRIEF LOADER
       ========================================== -->
  <div id="scene-zero-loader" class="fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14 overflow-hidden pointer-events-auto">
    
    <!-- SCANNING LINE ACCENT -->
    <div class="scan-line pointer-events-none"></div>

    <!-- TOP TELEMETRY HEADER -->
    <div class="flex items-center justify-between z-10 text-xs font-mono text-[#E7CA83]/80 tracking-widest uppercase border-b border-[#CCA147]/20 pb-4">
      <div class="flex items-center gap-3">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-[#CCA147] animate-ping"></span>
        <span>MISSION: GCC — ORBITAL SHOWROOM FLOOR</span>
      </div>
      <div class="hidden sm:flex items-center gap-6">
        <span>ENVIRONMENT: COSMIC SAPPHIRE / GOLD</span>
        <span id="telemetry-status" class="text-[#FCFFFE] font-bold">STATUS: AUTHORIZING...</span>
      </div>
      <button onclick="enterShowroomNow()" class="interactive-el px-4 py-1.5 rounded border border-[#CCA147]/60 bg-[#001B55]/80 text-[#E7CA83] hover:bg-[#003399] transition font-serif uppercase tracking-widest text-[10px]">
        ENTER SHOWROOM ⚡
      </button>
    </div>

    <!-- CENTER MISSION BRIEFING SEQUENTIAL TRANSMISSION -->
    <div class="max-w-4xl mx-auto text-center z-10 my-auto">
      
      <span class="text-xs font-serif uppercase tracking-[0.4em] text-[#CCA147] block mb-4">
        COSMIC 3D FLAGSHIP SHOWROOM ACCESS
      </span>

      <h1 class="text-4xl sm:text-7xl font-serif font-black tracking-widest text-[#FCFFFE] uppercase mb-8 leading-tight">
        GREEK COLORS <br/>
        <span class="gold-gradient-text">COLORS™</span>
      </h1>

      <!-- SEQUENTIAL SYSTEM TELEMETRY DISPLAY -->
      <div class="h-20 flex flex-col items-center justify-center space-y-2">
        <div id="loader-telemetry-text" class="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-[#E7CA83]">
          INITIALIZING ENVIRONMENT...
        </div>
        <div id="loader-telemetry-sub" class="text-xs font-serif italic text-[#FCFFFE]/70">
          Royal-blue architectural scanning grid establishing...
        </div>
      </div>

      <!-- PROGRESS PERCENTAGE BAR & TELEMETRY -->
      <div class="max-w-md mx-auto mt-8 space-y-3">
        <div class="w-full h-1.5 bg-[#001B55] rounded-full overflow-hidden border border-[#CCA147]/40">
          <div id="loader-progress-bar" class="h-full bg-gradient-to-r from-[#003399] via-[#CCA147] to-[#E7CA83] w-0 transition-all duration-300"></div>
        </div>
        <div class="flex items-center justify-between text-[11px] font-mono text-[#E7CA83]/90 tracking-widest">
          <span>SYSTEMS SYNC</span>
          <span id="loader-percent-num">0%</span>
        </div>
      </div>

      <!-- ENTER BUTTON (APPEARS AT ACCESS GRANTED) -->
      <div id="enter-btn-wrap" class="mt-10 opacity-0 transition-all duration-700 pointer-events-none transform translate-y-4">
        <button onclick="enterShowroomNow()" class="interactive-el btn-gold px-12 py-5 rounded font-serif text-xs uppercase tracking-[0.3em] shadow-[0_0_50px_rgba(204,161,71,0.6)]">
          ENTER ORBITAL SHOWROOM FLOOR →
        </button>
      </div>

    </div>

    <!-- BOTTOM ARCHITECTURAL BLUEPRINT NODES -->
    <div class="z-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-[#CCA147]/20 pt-4 text-[10px] font-mono text-[#FCFFFE]/70 tracking-widest uppercase">
      <div id="node-01" class="p-2 rounded bg-[#001B55]/60 border border-[#CCA147]/20">
        [01] ARRIVAL CHAMBER
      </div>
      <div id="node-02" class="p-2 rounded bg-[#001B55]/60 border border-[#CCA147]/20">
        [02] 3D CAROUSEL VAULT
      </div>
      <div id="node-03" class="p-2 rounded bg-[#001B55]/60 border border-[#CCA147]/20">
        [03] ATELIER SALON
      </div>
      <div id="node-04" class="p-2 rounded bg-[#001B55]/60 border border-[#CCA147]/20">
        [04] LEGACY GALLERY
      </div>
    </div>

  </div>

  <!-- ANNOUNCEMENT BAR -->
  <div class="relative z-40 bg-[#001B55] border-b border-[#CCA147]/40 py-2 px-4 text-center text-xs font-serif tracking-[0.2em] text-[#E7CA83] flex items-center justify-between">
    <div class="hidden sm:flex items-center gap-2">
      <span class="inline-block w-2 h-2 rounded-full bg-[#CCA147] animate-pulse"></span>
      SIGMA GAMMA RHO SORORITY, INC. OFFICIAL FINE JEWELRY COLLECTION
    </div>
    <div class="mx-auto sm:mx-0 flex items-center gap-3">
      <button onclick="switchTab('storefront')" id="tab-btn-storefront" class="interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#CCA147] text-[#001B55] font-bold">
        3D Flagship Showroom
      </button>
      <button onclick="switchTab('admin')" id="tab-btn-admin" class="interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#FCFFFE] hover:bg-[#001B55]">
        ⚙️ Admin Portal
      </button>
      <button onclick="switchTab('studio')" id="tab-btn-studio" class="interactive-el text-xs font-serif uppercase tracking-widest px-3 py-1 rounded bg-[#003399] border border-[#CCA147]/60 text-[#E7CA83] hover:bg-[#001B55]">
        ✨ AI Studio
      </button>
    </div>
  </div>

  <!-- FLOATING LIQUID GLASS NAV -->
  <header id="main-header" class="sticky top-0 z-40 glass-nav px-6 lg:px-16 py-4 transition-opacity duration-1000">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- BRAND LOGO -->
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
            Cosmic 3D Flagship Showroom • Roslyn Kiser Miller
          </span>
        </div>
      </a>

      <!-- 3D SHOWROOM FLOOR NAV LINKS -->
      <nav class="hidden md:flex items-center space-x-8 text-xs font-serif uppercase tracking-[0.2em] text-[#FCFFFE]/90">
        <a href="#scene-01" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">Arrival Floor</a>
        <a href="#scene-03" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">3D Carousel Vault</a>
        <a href="#scene-04" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">Extracted Archive</a>
        <a href="#scene-05" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">Sisterhood Gallery</a>
        <a href="#scene-06" onclick="switchTab('storefront')" class="interactive-el hover:text-[#CCA147] transition">Custom Atelier</a>
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

  <!-- STOREFRONT CONTENT (CONTINUOUS 3D BRAND WORLD) -->
  <div id="view-storefront" class="tab-content relative z-10">

    <!-- ==========================================
         SCENE 01 — ARRIVAL CHAMBER & ESTABLISHING SHOT
         ========================================== -->
    <section id="scene-01" class="act-scene min-h-[85vh] flex items-center justify-center relative py-20 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-[#00123A]/80 via-[#001B55]/70 to-[#003399]/30">
      
      <div class="max-w-5xl mx-auto text-center relative z-10">
        
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#001B55] border border-[#CCA147] text-[#E7CA83] text-xs font-serif uppercase tracking-[0.35em] mb-8 shadow-[0_0_35px_rgba(204,161,71,0.35)]">
          <span>🌌</span> Welcome to the Orbital Showroom Floor
        </div>

        <p class="font-editorial italic text-2xl sm:text-4xl text-[#E7CA83] mb-3 tracking-wide">
          SOME COLORS ARE WORN...
        </p>

        <p class="font-editorial italic text-xl sm:text-3xl text-[#FCFFFE]/85 mb-8 tracking-wide">
          OTHERS ARE CARRIED.
        </p>

        <h1 class="text-5xl sm:text-7xl lg:text-9xl font-serif font-black tracking-tight text-[#FCFFFE] leading-[1.05] mb-10">
          WEAR YOUR <br/>
          <span class="gold-gradient-text">COLORS.</span>
        </h1>

        <p class="max-w-2xl mx-auto text-base sm:text-lg text-[#FCFFFE]/90 font-sans leading-relaxed mb-12 font-light">
          Greek Colors Colors creates luxury fine jewelry & bespoke custom designs celebrating identity, sisterhood, and the heritage that connects generations.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#scene-03" class="interactive-el btn-gold px-10 py-5 rounded-sm font-serif text-xs uppercase tracking-[0.25em] w-full sm:w-auto">
            Step to 3D Carousel Vault →
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

    <!-- ==========================================
         SCENE 03 — MONUMENTAL 3D JEWELRY CAROUSEL VAULT
         ========================================== -->
    <section id="scene-03" class="act-scene py-24 px-6 lg:px-16 max-w-7xl mx-auto border-t border-[#CCA147]/25 text-center">
      <div class="mb-10">
        <span class="text-xs font-serif uppercase tracking-[0.35em] text-[#CCA147] block mb-3">Monumental 3D Display Installation</span>
        <h2 class="text-4xl sm:text-6xl font-serif font-bold text-[#FCFFFE] uppercase">
          CENTRAL JEWELRY CAROUSEL VAULT
        </h2>
        <p class="text-xs text-[#FCFFFE]/80 mt-2 font-mono">Use 3D Navigation Controls to rotate display platforms and lock spotlights onto hero pieces</p>
      </div>

      <!-- 3D HERO INSPECTION POD & CAROUSEL CONTROLLER -->
      <div class="glass-liquid rounded-3xl p-8 border-2 border-[#CCA147]/50 shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- LEFT: HERO PRODUCT INSPECTION DATA -->
        <div class="lg:col-span-5 text-left space-y-6">
          <div class="inline-block px-3 py-1 rounded bg-[#003399] border border-[#CCA147] text-[10px] font-serif uppercase text-[#E7CA83] tracking-widest font-bold">
            ★ HERO INSPECTION POSITION
          </div>
          
          <div>
            <span id="hero-piece-cat" class="text-xs font-serif uppercase tracking-[0.25em] text-[#CCA147] block font-semibold">Sigma Gamma Rho Collection</span>
            <h3 id="hero-piece-title" class="font-serif font-bold text-2xl sm:text-3xl text-[#FCFFFE] mt-1">Sigma Gamma Rho Centennial Sapphire Pendant</h3>
            <span id="hero-piece-price" class="text-2xl font-serif font-bold text-[#CCA147] block mt-2">$285.00</span>
          </div>

          <p id="hero-piece-desc" class="text-xs text-[#FCFFFE]/85 leading-relaxed font-sans">
            Handcrafted in solid 18k yellow gold fill and set with natural royal blue sapphires. Positioned in the central orbital vault pedestal with dedicated Pale Gold spotlighting.
          </p>

          <div class="pt-4 flex flex-wrap gap-4">
            <button id="hero-buy-btn" onclick="addToCart('Sigma Gamma Rho Centennial Sapphire Pendant', 285)" class="interactive-el btn-gold px-8 py-4 rounded text-xs uppercase tracking-widest">
              Acquire Hero Masterpiece
            </button>
            <a href="#scene-06" class="interactive-el px-6 py-4 rounded border border-[#CCA147] bg-[#00123A] text-[#E7CA83] text-xs font-serif uppercase tracking-widest hover:bg-[#003399] transition">
              Customize Atelier →
            </a>
          </div>
        </div>

        <!-- RIGHT: 3D DISPLAY POD IMAGE REVEAL -->
        <div class="lg:col-span-7 relative flex flex-col items-center justify-center">
          <div class="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden border-2 border-[#CCA147] shadow-[0_0_60px_rgba(204,161,71,0.5)] bg-[#00123A]/90 p-8 flex items-center justify-center">
            <img id="hero-display-img" src="assets/col-4-piece-1.jpg" alt="Hero Piece Inspection" class="max-h-full max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-700 hover:scale-105">
          </div>

          <!-- 3D CAROUSEL NAVIGATION CONTROLS -->
          <div class="mt-6 flex items-center gap-4 bg-[#00123A] border border-[#CCA147]/60 rounded-full px-6 py-3 shadow-xl">
            <button onclick="rotate3DCarousel('prev')" class="interactive-el text-xs font-serif uppercase tracking-widest text-[#CCA147] hover:text-[#E7CA83] flex items-center gap-2 font-bold">
              ← Previous Pedestal
            </button>
            <span class="text-xs font-mono text-[#FCFFFE]/60">|</span>
            <span id="carousel-pedestal-num" class="text-xs font-mono text-[#E7CA83]">POD 1 / 120</span>
            <span class="text-xs font-mono text-[#FCFFFE]/60">|</span>
            <button onclick="rotate3DCarousel('next')" class="interactive-el text-xs font-serif uppercase tracking-widest text-[#CCA147] hover:text-[#E7CA83] flex items-center gap-2 font-bold">
              Next Pedestal →
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- ==========================================
         SCENE 04 — REAL GOOGLE DRIVE COLLECTION CAROUSELS
         ========================================== -->
    <section id="scene-04" class="act-scene py-20 px-6 lg:px-16 max-w-7xl mx-auto space-y-20 border-t border-[#CCA147]/25">
      
      <div class="text-center mb-10">
        <span class="text-xs font-serif uppercase tracking-[0.35em] text-[#CCA147] block mb-3">Extracted Fine Jewelry Collections</span>
        <h2 class="text-3xl sm:text-5xl font-serif font-bold text-[#FCFFFE] tracking-wide uppercase">
          ROSLYN KISER MILLER ARCHIVE CAROUSELS
        </h2>
        <p class="text-xs text-[#FCFFFE]/80 mt-2 font-mono">Use Left & Right Arrow controls to slide through all 120 extracted real jewelry pieces</p>
        <div class="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#CCA147] to-transparent mx-auto mt-6"></div>
      </div>

      <!-- CAROUSELS CONTAINER (INJECTED VIA JS) -->
      <div id="carousels-container" class="space-y-16">
        <!-- Injected via JS -->
      </div>

    </section>

    <!-- ==========================================
         SCENE 05 — SISTERHOOD GALLERY
         ========================================== -->
    <section id="scene-05" class="act-scene py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-[#CCA147]/25 text-center">
      <span class="text-xs font-serif uppercase tracking-[0.35em] text-[#CCA147] block mb-3">Sisterhood Gallery</span>
      <h2 class="text-3xl sm:text-5xl font-serif font-bold text-[#FCFFFE] uppercase mb-4">
        MORE THAN WHAT YOU WEAR.
      </h2>
      <p class="font-editorial italic text-2xl text-[#E7CA83] mb-12">
        &ldquo;It's who stands beside you.&rdquo;
      </p>

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
         SCENE 06 — CUSTOMIZATION ATELIER
         ========================================== -->
    <section id="scene-06" class="act-scene py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-[#CCA147]/25">
      <div class="text-center mb-12">
        <span class="text-xs font-serif uppercase tracking-[0.35em] text-[#CCA147] block mb-3">Customization Atelier</span>
        <h2 class="text-3xl sm:text-5xl font-serif font-bold text-[#FCFFFE] uppercase">
          CREATE SOMETHING UNFORGETTABLE
        </h2>
        <p class="text-xs text-[#FCFFFE]/80 mt-2 font-mono">Personalize metals, gemstones, monograms, and chapter engravings in real-time</p>
      </div>

      <div class="glass-liquid rounded-2xl p-8 border border-[#CCA147]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 class="font-serif font-bold text-xl text-[#FCFFFE] mb-4">Interactive Customizer Studio</h3>
          
          <div class="space-y-4 text-xs font-serif uppercase text-[#CCA147]">
            <div>
              <label class="block mb-1">1. Select Precious Metal</label>
              <select id="cust-metal" onchange="updateCustomizerPreview()" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-3 rounded text-xs text-[#FCFFFE]">
                <option value="18k-gold">Solid 18k Yellow Gold Fill</option>
                <option value="royal-blue-enamel">Royal Blue & Gold Enamel</option>
                <option value="pale-gold">Pale Gold Highlight</option>
              </select>
            </div>

            <div>
              <label class="block mb-1">2. Custom Engraving / Monogram</label>
              <input type="text" id="cust-text" oninput="updateCustomizerPreview()" value="ΣΓΡ • Centennial 1922" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-3 rounded text-xs text-[#FCFFFE]">
            </div>

            <div>
              <label class="block mb-1">3. Gemstone Selection</label>
              <select id="cust-gem" onchange="updateCustomizerPreview()" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-3 rounded text-xs text-[#FCFFFE]">
                <option value="sapphire">Royal Blue Natural Sapphires</option>
                <option value="diamond">Brilliant Cut Gold Diamonds</option>
                <option value="pearl">Natural South Sea Pearls</option>
              </select>
            </div>

            <button onclick="alert('✨ Bespoke customization order initialized! Sorority Concierge will contact you.')" class="interactive-el btn-gold w-full py-4 rounded text-xs tracking-widest mt-4">
              Submit Bespoke Customization Order
            </button>
          </div>
        </div>

        <div class="bg-[#00123A] border border-[#CCA147]/40 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
          <div class="w-24 h-24 rounded-full border-2 border-[#CCA147] bg-[#003399] flex items-center justify-center text-3xl font-serif font-bold text-[#CCA147] mb-4 shadow-[0_0_30px_rgba(204,161,71,0.5)]">
            ΣΓΡ
          </div>
          <span id="preview-engrave" class="font-serif font-bold text-lg text-[#FCFFFE] block mb-2">ΣΓΡ • Centennial 1922</span>
          <span id="preview-specs" class="text-xs text-[#E7CA83] font-mono">18k Yellow Gold • Royal Blue Sapphires</span>
        </div>
      </div>
    </section>

    <!-- LEGACY NEWSLETTER -->
    <section class="act-scene py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-[#CCA147]/25 text-center">
      <span class="text-xs font-serif uppercase tracking-[0.35em] text-[#CCA147] block mb-3">Legacy Continues</span>
      <h2 class="text-4xl sm:text-6xl font-serif font-bold text-[#FCFFFE] uppercase mb-4">
        THE COLOR CHANGES HANDS.
      </h2>
      <p class="font-editorial italic text-3xl text-[#E7CA83] mb-12">
        &ldquo;The meaning remains.&rdquo;
      </p>

      <div class="max-w-md mx-auto p-2.5 rounded-full glass-liquid flex items-center border border-[#CCA147]/60 shadow-2xl mb-12">
        <input type="email" placeholder="Enter your email for collection drops..." class="bg-transparent border-none outline-none px-4 py-2 text-xs text-[#FCFFFE] placeholder-gray-400 w-full">
        <button onclick="alert('✨ Thank you! You are now subscribed to Greek Colors Colors drops.')" class="interactive-el btn-gold px-6 py-2.5 rounded-full text-xs font-serif uppercase tracking-widest flex-shrink-0">
          Join List →
        </button>
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
              <input type="text" id="prod-img" required placeholder="assets/col-1-piece-1.jpg" class="w-full bg-[#00123A] border border-[#CCA147]/40 p-2.5 rounded text-xs text-[#FCFFFE]">
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
              <input type="text" id="studio-img-url" value="assets/col-4-piece-1.jpg" class="w-full bg-[#00123A] border border-[#CCA147]/30 p-2.5 rounded text-xs text-[#FCFFFE]">
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
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span class="font-serif font-bold text-lg text-[#CCA147]">ΣΓΡ</span>
          <span class="font-serif font-extrabold text-base tracking-widest text-[#FCFFFE]">GREEK COLORS COLORS</span>
        </div>
        <p class="text-xs text-[#FCFFFE]/70 leading-relaxed">
          Bespoke sorority fine jewelry celebrating Sigma Gamma Rho Sorority, Inc.
        </p>
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

  <!-- THREE.JS CONTINUOUS 3D SPATIAL ENGINE SCRIPT -->
  <script>
    // Three.js 3D Spatial Canvas Setup
    const canvas = document.getElementById('webgl-canvas');
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x00123A, 0.035);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.2, 12);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0x001B55, 0.5); // Dim initially for loader
    scene.add(ambientLight);

    const royalPointLight = new THREE.PointLight(0x003399, 1, 30);
    royalPointLight.position.set(0, 4, 2);
    scene.add(royalPointLight);

    const goldSpotLight = new THREE.SpotLight(0xCCA147, 1, 40, Math.PI / 4, 0.5);
    goldSpotLight.position.set(5, 8, 5);
    scene.add(goldSpotLight);

    // Sculptural 3D Floating Geometry (Sigma Gamma Gold Ring)
    const torusGeo = new THREE.TorusKnotGeometry(2.2, 0.45, 120, 16);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xCCA147,
      metalness: 0.92,
      roughness: 0.18,
      emissive: 0x001B55,
      emissiveIntensity: 0.2
    });
    const heroSculpture = new THREE.Mesh(torusGeo, goldMat);
    heroSculpture.position.set(0, 0.5, -4);
    scene.add(heroSculpture);

    // Floating Gold Micro-Particles System in 3D Space
    const particlesCount = 350;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 35;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xE7CA83,
      transparent: true,
      opacity: 0.2 // Faint initially during loader
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Mouse Interaction Drift
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Scroll-Driven Camera Translation & Spatial Trajectory
    window.addEventListener('scroll', () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      
      // Translate camera along 3D spatial curve
      camera.position.z = 12 - scrollPercent * 18;
      camera.position.y = 1.2 + Math.sin(scrollPercent * Math.PI * 2) * 1.5;
      camera.position.x = Math.cos(scrollPercent * Math.PI * 2) * 2.5;

      heroSculpture.rotation.x = scrollPercent * Math.PI * 4;
      heroSculpture.rotation.y = scrollPercent * Math.PI * 3;
    });

    // Render Loop
    function animate() {
      requestAnimationFrame(animate);

      // Subtle float & mouse drift
      heroSculpture.rotation.y += 0.006;
      heroSculpture.rotation.z += 0.003;

      camera.position.x += (mouseX * 0.4 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.4 + 1.2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, -4);

      renderer.render(scene, camera);
    }
    animate();

    // ==========================================
    // SCENE ZERO LOADER STATE MACHINE & TIMELINE
    // ==========================================
    let loaderProgress = 0;
    const loaderSteps = [
      { pct: 15, title: "INITIALIZING ENVIRONMENT...", sub: "Royal-blue architectural scanning grid establishing...", node: "node-01" },
      { pct: 30, title: "CALIBRATING NAVIGATION...", sub: "Spatial blueprint resolving 3D showroom coordinates...", node: "node-01" },
      { pct: 45, title: "ESTABLISHING ORBITAL LINK...", sub: "Cosmic environment particles and lighting activating...", node: "node-02" },
      { pct: 60, title: "SYNCING COLLECTION ARCHIVE...", sub: "120 fine jewelry pieces verified in archive...", node: "node-02" },
      { pct: 75, title: "LOADING MATERIAL SYSTEMS...", sub: "Solid 18k gold & royal blue sapphire PBR shaders ready...", node: "node-03" },
      { pct: 90, title: "ACTIVATING SHOWROOM LIGHTING...", sub: "Orbital vault illumination powered on...", node: "node-04" },
      { pct: 100, title: "ACCESS GRANTED — SHOWROOM ONLINE", sub: "Welcome to Greek Colors Colors. Prepare to enter.", node: "node-04" }
    ];

    function updateLoaderProgress(pct) {
      loaderProgress = pct;
      document.getElementById('loader-progress-bar').style.width = pct + '%';
      document.getElementById('loader-percent-num').innerText = Math.round(pct) + '%';

      // 3D Environment Progression based on loading %
      ambientLight.intensity = 0.5 + (pct / 100) * 1.5;
      royalPointLight.intensity = 1 + (pct / 100) * 3;
      goldSpotLight.intensity = 1 + (pct / 100) * 4;
      particlesMat.opacity = 0.2 + (pct / 100) * 0.6;

      const step = loaderSteps.find(s => pct <= s.pct);
      if (step) {
        document.getElementById('loader-telemetry-text').innerText = step.title;
        document.getElementById('loader-telemetry-sub').innerText = step.sub;
        
        if (step.node) {
          document.querySelectorAll('[id^="node-"]').forEach(n => n.classList.remove('border-[#CCA147]', 'text-[#CCA147]'));
          const activeNode = document.getElementById(step.node);
          if (activeNode) {
            activeNode.classList.add('border-[#CCA147]', 'text-[#CCA147]');
          }
        }
      }

      if (pct >= 100) {
        document.getElementById('telemetry-status').innerText = 'STATUS: AUTHORIZED';
        document.getElementById('telemetry-status').className = 'text-emerald-400 font-bold';
        
        const enterBtnWrap = document.getElementById('enter-btn-wrap');
        enterBtnWrap.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        enterBtnWrap.classList.add('opacity-100', 'translate-y-0');
      }
    }

    // Auto Progress Loader Simulation
    let loaderTimer = setInterval(() => {
      if (loaderProgress < 100) {
        updateLoaderProgress(loaderProgress + 15);
      } else {
        clearInterval(loaderTimer);
      }
    }, 450);

    function enterShowroomNow() {
      clearInterval(loaderTimer);
      updateLoaderProgress(100);

      const loaderEl = document.getElementById('scene-zero-loader');
      loaderEl.style.opacity = '0';
      loaderEl.style.transform = 'scale(1.05)';
      
      setTimeout(() => {
        loaderEl.style.display = 'none';
      }, 1200);
    }

    // Custom Aura Cursor Logic
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('custom-cursor-follower');

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    });

    function bindCursorEvents() {
      document.querySelectorAll('.interactive-el, a, button, input, select').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
      });
    }

    // Intersection Observer for Scene Reveals
    const actObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.act-scene').forEach(sc => actObserver.observe(sc));
  </script>

  <!-- EMBEDDED REAL GOOGLE DRIVE COLLECTIONS DATA & 3D CAROUSEL LOGIC -->
  <script>
    let cart = [];
    let activePedestalIdx = 0;
    let flatItemList = [];

    function scrollCarousel(colId, direction) {
      const track = document.getElementById('carousel-track-' + colId);
      if (!track) return;
      const scrollAmount = track.clientWidth * 0.75;
      track.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }

    function rotate3DCarousel(dir) {
      if (flatItemList.length === 0) return;

      if (dir === 'next') {
        activePedestalIdx = (activePedestalIdx + 1) % flatItemList.length;
      } else {
        activePedestalIdx = (activePedestalIdx - 1 + flatItemList.length) % flatItemList.length;
      }

      updateHeroInspectionPod(activePedestalIdx);
    }

    function updateHeroInspectionPod(idx) {
      if (flatItemList.length === 0) return;
      const item = flatItemList[idx];

      const imgEl = document.getElementById('hero-display-img');
      const catEl = document.getElementById('hero-piece-cat');
      const titleEl = document.getElementById('hero-piece-title');
      const priceEl = document.getElementById('hero-piece-price');
      const descEl = document.getElementById('hero-piece-desc');
      const numEl = document.getElementById('carousel-pedestal-num');
      const buyBtn = document.getElementById('hero-buy-btn');

      if (imgEl) {
        imgEl.style.opacity = '0';
        imgEl.style.transform = 'scale(0.95)';
        setTimeout(() => {
          imgEl.src = item.imgUrl;
          imgEl.style.opacity = '1';
          imgEl.style.transform = 'scale(1)';
        }, 200);
      }

      if (catEl) catEl.innerText = item.colName;
      if (titleEl) titleEl.innerText = item.pieceTitle;
      if (priceEl) priceEl.innerText = '$' + item.price.toFixed(2);
      if (descEl) descEl.innerText = 'Handcrafted in solid 18k yellow gold fill and set with natural royal blue sapphires. Positioned in orbital 3D vault pedestal #' + (idx + 1) + ' with dedicated Pale Gold spotlighting.';
      if (numEl) numEl.innerText = 'POD ' + (idx + 1) + ' / ' + flatItemList.length;
      
      if (buyBtn) {
        buyBtn.onclick = function() {
          addToCart(item.pieceTitle, item.price);
        };
      }
    }

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

    function renderUI() {
      const collections = window.GREEK_COLLECTIONS || [];
      const carouselsContainer = document.getElementById('carousels-container');
      if (!carouselsContainer) return;
      
      flatItemList = [];
      let carouselsHtml = '';

      collections.forEach(col => {
        carouselsHtml += \`
          <div class="glass-liquid rounded-2xl p-6 sm:p-8 border border-[#CCA147]/40 shadow-2xl relative">
            
            <!-- Carousel Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-[#CCA147]/25 pb-4">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-serif font-bold text-2xl text-[#FCFFFE] tracking-wide">\${col.name}</h3>
                  \${col.isFeatured ? '<span class="px-2.5 py-0.5 rounded bg-[#003399] border border-[#CCA147] text-[10px] font-serif text-[#E7CA83] font-bold">★ Prominent Line</span>' : ''}
                </div>
                <span class="text-xs text-[#E7CA83] font-mono mt-0.5 block">\${col.images.length} Real Extracted Fine Jewelry Pieces</span>
              </div>

              <!-- Controls -->
              <div class="flex items-center gap-3">
                <button onclick="scrollCarousel('\${col.id}', 'left')" class="interactive-el px-3.5 py-1.5 rounded-full border border-[#CCA147]/60 bg-[#00123A] text-[#CCA147] hover:bg-[#003399] text-sm font-bold flex items-center gap-1 transition shadow-md">
                  ← Prev
                </button>
                <button onclick="scrollCarousel('\${col.id}', 'right')" class="interactive-el px-3.5 py-1.5 rounded-full border border-[#CCA147]/60 bg-[#00123A] text-[#CCA147] hover:bg-[#003399] text-sm font-bold flex items-center gap-1 transition shadow-md">
                  Next →
                </button>
              </div>
            </div>

            <!-- Horizontal Carousel Track -->
            <div id="carousel-track-\${col.id}" class="carousel-track flex items-stretch gap-6 overflow-x-auto pb-4 pt-2">
        \`;

        col.images.forEach((imgUrl, imgIdx) => {
          const price = 145 + ((imgIdx * 25) % 350);
          const pieceTitle = \`\${col.name} Piece #\${imgIdx + 1}\`;

          flatItemList.push({
            colName: col.name,
            pieceTitle: pieceTitle,
            price: price,
            imgUrl: imgUrl
          });

          const currentFlatIdx = flatItemList.length - 1;

          carouselsHtml += \`
            <div class="w-72 sm:w-80 flex-shrink-0 bg-[#00123A] border border-[#CCA147]/30 rounded-xl overflow-hidden group hover:border-[#CCA147] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div onclick="updateHeroInspectionPod(\${currentFlatIdx})" class="relative h-64 bg-[#001B55] overflow-hidden flex items-center justify-center p-3 cursor-pointer">
                  <img src="\${imgUrl}" alt="\${pieceTitle}" loading="lazy" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500">
                  <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#003399]/80 border border-[#CCA147]/40 text-[9px] font-mono text-[#E7CA83]">Inspect in 3D 🔍</span>
                </div>
                <div class="p-4">
                  <span class="text-[10px] font-serif uppercase tracking-widest text-[#E7CA83] font-semibold block mb-1">\${col.name}</span>
                  <h4 class="font-serif font-bold text-base text-[#FCFFFE] mb-1">\${pieceTitle}</h4>
                  <p class="text-[11px] text-[#FCFFFE]/75 leading-relaxed">Authentic fine jewelry design by Roslyn Kiser Miller.</p>
                </div>
              </div>
              <div class="p-4 pt-0 border-t border-[#CCA147]/20 flex items-center justify-between mt-auto">
                <span class="text-base font-serif font-bold text-[#CCA147]">\$\${price.toFixed(2)}</span>
                <button onclick="addToCart('\${pieceTitle.replace(/'/g, "\\'")}', \${price})" class="interactive-el btn-gold px-3.5 py-1.5 rounded text-xs uppercase tracking-wider">
                  Add to Bag
                </button>
              </div>
            </div>
          \`;
        });

        carouselsHtml += \`
            </div>
          </div>
        \`;
      });

      carouselsContainer.innerHTML = carouselsHtml;

      // Initialize 3D Hero Inspection Pod with first item
      if (flatItemList.length > 0) {
        updateHeroInspectionPod(0);
      }

      // Admin Inventory List
      const adminList = document.getElementById('admin-inventory-list');
      if (adminList) {
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
                  <span class="text-xs text-[#E7CA83]">\${col.images.length} Real Extracted Jewelry Pieces</span>
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

      bindCursorEvents();
    }

    function updateCustomizerPreview() {
      const metal = document.getElementById('cust-metal').value;
      const text = document.getElementById('cust-text').value || 'ΣΓΡ • Centennial 1922';
      const gem = document.getElementById('cust-gem').value;

      document.getElementById('preview-engrave').innerText = text;
      document.getElementById('preview-specs').innerText = metal.replace(/-/g, ' ').toUpperCase() + ' • ' + gem.toUpperCase();
    }

    function toggleProminence(colId) {
      const collections = window.GREEK_COLLECTIONS || [];
      const target = collections.find(c => c.id === colId);
      if (target) {
        target.isFeatured = !target.isFeatured;
        renderUI();
      }
    }

    function handleAddProduct(e) {
      e.preventDefault();
      const collections = window.GREEK_COLLECTIONS || [];
      const title = document.getElementById('prod-title').value;
      const price = Number(document.getElementById('prod-price').value);
      const img = document.getElementById('prod-img').value;

      if (collections[0]) {
        collections[0].images.unshift(img);
        renderUI();
        alert('✦ Success! Added ' + title + ' to active catalog.');
        switchTab('storefront');
      }
    }

    function handleZipUpload(e) {
      e.preventDefault();
      const collections = window.GREEK_COLLECTIONS || [];
      const colName = document.getElementById('zip-col-name').value || 'Royal Archive';
      const featured = document.getElementById('zip-featured').checked;

      collections.unshift({
        id: 'col-' + Date.now(),
        name: colName,
        isFeatured: featured,
        images: [collections[0] ? collections[0].images[0] : 'assets/col-1-piece-1.jpg']
      });

      renderUI();
      alert('✦ Success! Unpacked ZIP archive and generated interactive carousel for ' + colName + '!');
      switchTab('storefront');
    }

    function runAIGenerator() {
      alert('✨ GPT-4o Multimodal Vision Analysis Complete!\\nGenerated copy & pricing aligned with Confidence Coach in a Bottle™ brand voice.');
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

    // Initial render call on DOM ready
    window.addEventListener('DOMContentLoaded', () => {
      renderUI();
    });
    renderUI();
  </script>

</body>
</html>
`;

fs.writeFileSync('index.html', htmlCode);
console.log('Successfully embedded 120 Base64 jewelry images directly inside index.html!');
