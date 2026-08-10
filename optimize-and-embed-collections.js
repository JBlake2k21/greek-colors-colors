const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processCollections() {
  const rawData = JSON.parse(fs.readFileSync('collections-data.json', 'utf8'));
  const outDir = 'public/collections_web';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const processedCollections = [];
  let totalCount = 0;

  for (const col of rawData) {
    const colImagesB64 = [];
    let pieceIdx = 1;

    for (const relativeImgPath of col.images) {
      const srcPath = path.join('public', relativeImgPath.replace(/^\.\//, ''));
      if (!fs.existsSync(srcPath)) {
        console.warn(`File not found: ${srcPath}`);
        continue;
      }

      try {
        // Resize to max 600px width/height, 80% quality JPG
        const buffer = await sharp(srcPath)
          .resize(600, 600, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 80 })
          .toBuffer();

        const b64 = `data:image/jpeg;base64,${buffer.toString('base64')}`;
        colImagesB64.push(b64);

        // Also save to public/collections_web
        const webFileName = `${col.id}-piece-${pieceIdx}.jpg`;
        fs.writeFileSync(path.join(outDir, webFileName), buffer);

        pieceIdx++;
        totalCount++;
      } catch (err) {
        console.error(`Error processing ${srcPath}:`, err.message);
      }
    }

    processedCollections.push({
      id: col.id,
      name: col.name,
      isFeatured: col.isFeatured,
      images: colImagesB64
    });

    console.log(`Processed ${col.name}: ${colImagesB64.length} images converted to Base64 Data URIs!`);
  }

  fs.writeFileSync('collections-b64-data.json', JSON.stringify(processedCollections));
  console.log(`✨ Successfully optimized and converted ${totalCount} real Google Drive jewelry photos into self-contained Base64 Data URIs!`);
}

processCollections();
