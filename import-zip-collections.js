const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const PUBLIC_DIR = path.join(__dirname, 'public');
const COLLECTIONS_DIR = path.join(PUBLIC_DIR, 'collections');

function extractZips() {
  if (!fs.existsSync(COLLECTIONS_DIR)) {
    fs.mkdirSync(COLLECTIONS_DIR, { recursive: true });
  }

  const files = fs.readdirSync(PUBLIC_DIR);
  const zips = files.filter(f => f.toLowerCase().endsWith('.zip'));

  console.log(`Found ${zips.length} zip files in public/ directory.`);

  for (const zip of zips) {
    const zipPath = path.join(PUBLIC_DIR, zip);
    const colName = zip.replace(/\.zip$/i, '').trim();
    const destDir = path.join(COLLECTIONS_DIR, colName);

    if (!fs.existsSync(destDir)) {
      console.log(`Extracting "${zip}" -> "${destDir}"...`);
      try {
        execSync(`powershell -NoProfile -Command "Expand-Archive -Path '${zipPath.replace(/'/g, "''")}' -DestinationPath '${destDir.replace(/'/g, "''")}' -Force"`, {
          stdio: 'inherit'
        });
      } catch (e) {
        console.error(`Failed to extract ${zip}:`, e.message);
      }
    } else {
      console.log(`"${colName}" already extracted.`);
    }
  }
}

function findImagesRecursively(dir, rootDir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      // Ignore macOS hidden folders
      if (!item.startsWith('__MACOSX')) {
        results = results.concat(findImagesRecursively(fullPath, rootDir));
      }
    } else {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext) && !item.startsWith('._')) {
        // Compute relative web URL from public/ dir
        const relPath = path.relative(PUBLIC_DIR, fullPath).split(path.sep).join('/');
        results.push('/' + relPath);
      }
    }
  }
  return results;
}

async function main() {
  console.log('1. Checking and extracting zip files in public/...');
  extractZips();

  console.log('2. Cleaning existing database entries...');
  await prisma.product.deleteMany();
  await prisma.collection.deleteMany();

  console.log('3. Scanning extracted collections and seeding database...');
  const entries = fs.readdirSync(COLLECTIONS_DIR, { withFileTypes: true });

  let totalCollections = 0;
  let totalProducts = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('__MACOSX') || entry.name.startsWith('.')) continue;

    const colName = entry.name;
    const colDir = path.join(COLLECTIONS_DIR, colName);
    const images = findImagesRecursively(colDir, PUBLIC_DIR);

    if (images.length === 0) {
      console.log(`Skipping collection "${colName}" (no image files found).`);
      continue;
    }

    console.log(`Creating Collection "${colName}" with ${images.length} images...`);
    const collection = await prisma.collection.create({
      data: {
        name: colName,
        description: `Ears of Elegance — ${colName}`,
        displayOrder: totalCollections + 1,
        images: JSON.stringify([images[0]])
      }
    });
    totalCollections++;

    // Create products for images in this collection
    for (let i = 0; i < images.length; i++) {
      const imageUrl = images[i];
      // Format URL so spaces and characters work cleanly in browsers
      const encodedUrl = imageUrl.split('/').map(segment => encodeURIComponent(segment)).join('/');
      
      const price = 85 + ((i * 15) % 150); // Generates realistic jewelry prices between $85 and $235
      const productTitle = `${colName} Piece #${i + 1}`;

      await prisma.product.create({
        data: {
          title: productTitle,
          price: price,
          description: `Handcrafted jewelry from the ${colName}.`,
          inStock: true,
          collectionId: collection.id,
          images: JSON.stringify([encodedUrl])
        }
      });
      totalProducts++;
    }
  }

  console.log(`\n✅ Success! Imported ${totalCollections} collections and ${totalProducts} total jewelry products from your zip files!`);
}

main()
  .catch(e => {
    console.error('Error during import:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
