const fs = require('fs');
const path = require('path');

function getCollectionImages() {
  const baseDir = 'public/collections';
  const dirs = fs.readdirSync(baseDir);
  const collections = [];

  dirs.forEach((dir, idx) => {
    const fullPath = path.join(baseDir, dir);
    if (!fs.statSync(fullPath).isDirectory()) return;

    let subFiles = [];
    function scan(d) {
      fs.readdirSync(d).forEach(f => {
        const p = path.join(d, f);
        if (fs.statSync(p).isDirectory()) {
          scan(p);
        } else if (/\.(jpe?g|png|webp)$/i.test(f)) {
          subFiles.push('./' + path.relative('public', p).replace(/\\/g, '/'));
        }
      });
    }
    scan(fullPath);

    if (subFiles.length > 0) {
      collections.push({
        id: 'col-' + (idx + 1),
        name: dir.replace(/-/g, ' ').replace(/\s+/g, ' '),
        isFeatured: idx < 3 || dir.toLowerCase().includes('greek'),
        images: subFiles
      });
    }
  });

  return collections;
}

const collections = getCollectionImages();
fs.writeFileSync('collections-data.json', JSON.stringify(collections, null, 2));
console.log(`Indexed ${collections.length} real collections with ${collections.reduce((a,c) => a + c.images.length, 0)} total jewelry photos!`);
