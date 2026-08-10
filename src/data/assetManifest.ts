export interface AssetEntry {
  id: string;
  name: string;
  source: string;
  classification: 'KEEP' | 'ENHANCE' | 'CONVERT_TO_3D' | 'USE_AS_REFERENCE' | 'REPLACE';
  role: string;
  scene: string;
  higgsfieldSkill?: string;
  generatedOutputs?: {
    front?: string;
    back?: string;
    side?: string;
    glb?: string;
    optimizedGlb?: string;
    b64DataUri?: string;
  };
}

export const assetManifest: Record<string, AssetEntry> = {
  roslynPortrait: {
    id: "roslyn-portrait",
    name: "Roslyn Kiser Miller Official Portrait",
    source: "/assets/roslyn-miller.jpg",
    classification: "KEEP",
    role: "founder-portrait",
    scene: "arrival-chamber",
    higgsfieldSkill: "higgsfield-soul-id"
  },
  flagshipPendant: {
    id: "flagship-pendant",
    name: "Sigma Gamma Rho Centennial Sapphire Pendant",
    source: "/assets/col-4-piece-1.jpg",
    classification: "CONVERT_TO_3D",
    role: "flagship-product",
    scene: "product-vault",
    higgsfieldSkill: "higgsfield-product-photoshoot",
    generatedOutputs: {
      glb: "/assets/models/pendant.glb",
      optimizedGlb: "/assets/models/pendant-opt.glb"
    }
  },
  greekCollectionSuite: {
    id: "greek-collection",
    name: "Official Greek Fine Jewelry Collection (6 Pieces)",
    source: "/assets/collections/Greek Collection",
    classification: "KEEP",
    role: "hero-collection",
    scene: "collection-universe",
    higgsfieldSkill: "higgsfield-marketplace-cards"
  },
  caribbeanCollectionSuite: {
    id: "caribbean-collection",
    name: "Caribbean Fine Jewelry Collection (20 Pieces)",
    source: "/assets/collections/Caribbean Collection",
    classification: "KEEP",
    role: "lifestyle-collection",
    scene: "collection-universe",
    higgsfieldSkill: "higgsfield-marketplace-cards"
  },
  cobraCollectionSuite: {
    id: "cobra-collection",
    name: "Cobra Fine Jewelry Collection (23 Pieces)",
    source: "/assets/collections/Cobra Collection",
    classification: "KEEP",
    role: "sculptural-collection",
    scene: "collection-universe",
    higgsfieldSkill: "higgsfield-marketplace-cards"
  },
  christianCollectionSuite: {
    id: "christian-collection",
    name: "Christian Faith Collection (13 Pieces)",
    source: "/assets/collections/Christian Collection-selected",
    classification: "KEEP",
    role: "faith-collection",
    scene: "collection-universe",
    higgsfieldSkill: "higgsfield-marketplace-cards"
  },
  weddingCollectionSuite: {
    id: "wedding-collection",
    name: "Wedding Fine Jewelry Collection (6 Pieces)",
    source: "/assets/collections/Wedding collection",
    classification: "KEEP",
    role: "bridal-collection",
    scene: "collection-universe",
    higgsfieldSkill: "higgsfield-marketplace-cards"
  },
  wireCollectionSuite: {
    id: "wire-collection",
    name: "Wire Wrap Fine Jewelry Collection (13 Pieces)",
    source: "/assets/collections/Wire Collection",
    classification: "KEEP",
    role: "artisan-collection",
    scene: "collection-universe",
    higgsfieldSkill: "higgsfield-marketplace-cards"
  },
  hoopsCollectionSuite: {
    id: "hoops-collection",
    name: "Hoops Fine Jewelry Collection (29 Pieces)",
    source: "/assets/collections/Hoops",
    classification: "KEEP",
    role: "statement-collection",
    scene: "collection-universe",
    higgsfieldSkill: "higgsfield-marketplace-cards"
  },
  holidayCollectionSuite: {
    id: "holiday-collection",
    name: "Holiday Fine Jewelry Collection (3 Pieces)",
    source: "/assets/collections/Holiday Collection",
    classification: "KEEP",
    role: "festive-collection",
    scene: "collection-universe",
    higgsfieldSkill: "higgsfield-marketplace-cards"
  },
  newCollectionSuite: {
    id: "new-collection",
    name: "New 2026 Signature Release (7 Pieces)",
    source: "/assets/collections/New",
    classification: "KEEP",
    role: "signature-collection",
    scene: "collection-universe",
    higgsfieldSkill: "higgsfield-marketplace-cards"
  }
};
