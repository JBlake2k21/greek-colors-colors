// scripts/build-catalog.js
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../public/collections');
const outPath = path.join(__dirname, '../lib/default-catalog.ts');

const collectionMeta = {
  "Caribbean Collection": {
    name: "Caribbean Collection",
    description: "Bespoke pieces inspired by azure waters and golden island sunsets.",
    priceRange: [1250, 3800],
    prefix: "Caribbean Sovereign Piece"
  },
  "Christian Collection-selected": {
    name: "Christian Collection",
    description: "Sacred elegance and regal symbolism crafted in champagne gold and obsidian.",
    priceRange: [1400, 4200],
    prefix: "Seraphim Heritage Jewel"
  },
  "Cobra Collection": {
    name: "Cobra Collection",
    description: "Bold, serpentine silhouettes with captivating gold texture and emerald accents.",
    priceRange: [1800, 5500],
    prefix: "Cobra Imperial Silhouette"
  },
  "Greek Collection": {
    name: "Greek Collection",
    description: "Mythological grandeur and neoclassical motifs in polished high-karat gold.",
    priceRange: [1600, 4800],
    prefix: "Athena Neoclassical Earring"
  },
  "Holiday Collection": {
    name: "Holiday Collection",
    description: "Festive opulence designed for grand celebrations and gala evenings.",
    priceRange: [2200, 6500],
    prefix: "Gala Royale Diamond Earring"
  },
  "Hoops": {
    name: "Hoops Collection",
    description: "Architectural hoop silhouettes redefining everyday luxury and sophistication.",
    priceRange: [950, 2900],
    prefix: "Architectural Sovereign Hoop"
  },
  "New": {
    name: "New Arrivals",
    description: "The latest avant-garde designs by Roslyn Kiser Miller.",
    priceRange: [1500, 4500],
    prefix: "Roslyn Miller Debut Jewel"
  },
  "Wedding collection": {
    name: "Wedding Collection",
    description: "Timeless bridal heirloom jewels crafted to last generations.",
    priceRange: [2800, 8500],
    prefix: "Heirloom Bridal Solitaire"
  },
  "Wire Collection": {
    name: "Wire Collection",
    description: "Delicate wirework artistry showcasing ethereal movement and balance.",
    priceRange: [1100, 3400],
    prefix: "Ethereal Wirework Drop"
  }
};

const collections = [];
let order = 0;

fs.readdirSync(baseDir).forEach(dirName => {
  const meta = collectionMeta[dirName];
  if (!meta) return;

  const dirPath = path.join(baseDir, dirName);
  let files = [];
  if (fs.statSync(dirPath).isDirectory()) {
    let subFiles = fs.readdirSync(dirPath);
    if (subFiles.length === 1 && fs.statSync(path.join(dirPath, subFiles[0])).isDirectory()) {
      const subDir = subFiles[0];
      files = fs.readdirSync(path.join(dirPath, subDir)).map(f => `${dirName}/${subDir}/${f}`);
    } else {
      files = subFiles.map(f => `${dirName}/${f}`);
    }
  }

  const validImages = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
  if (validImages.length === 0) return;

  const collectionId = `col-${order + 1}`;
  const products = validImages.map((imgPath, idx) => {
    const url = `/collections/${imgPath.replace(/\\/g, '/')}`;
    const [minP, maxP] = meta.priceRange;
    const price = Math.round(minP + ((maxP - minP) * (idx / Math.max(validImages.length - 1, 1))));
    return {
      id: `${collectionId}-prod-${idx + 1}`,
      title: `${meta.prefix} #${idx + 1}`,
      price: String(price),
      description: `${meta.description} Handcrafted by Roslyn Kiser Miller.`,
      inStock: true,
      images: JSON.stringify([url]),
      collectionId: collectionId
    };
  });

  const bannerUrl = `/collections/${validImages[0].replace(/\\/g, '/')}`;

  collections.push({
    id: collectionId,
    name: meta.name,
    description: meta.description,
    images: JSON.stringify([bannerUrl]),
    displayOrder: order++,
    products: products
  });
});

const tsContent = `// lib/default-catalog.ts
// Automatically generated static luxury catalog for zero-database serverless fallback

export interface CatalogProduct {
  id: string;
  title: string;
  price: string;
  description: string;
  inStock: boolean;
  images: string;
  collectionId: string;
}

export interface CatalogCollection {
  id: string;
  name: string;
  description: string;
  images: string;
  displayOrder: number;
  products: CatalogProduct[];
}

export const DEFAULT_COLLECTIONS: CatalogCollection[] = ${JSON.stringify(collections, null, 2)};
`;

fs.writeFileSync(outPath, tsContent, 'utf8');
console.log(`Generated default catalog with ${collections.length} collections and ${collections.reduce((a, c) => a + c.products.length, 0)} products.`);
