const fs = require('fs');
const path = require('path');

function createAssetsFolder() {
  const srcDir = 'public/collections_web';
  const destDir = 'public/assets';

  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
  });

  // Also copy Roslyn photo
  if (fs.existsSync('public/roslyn-miller.jpg')) {
    fs.copyFileSync('public/roslyn-miller.jpg', 'public/assets/roslyn-miller.jpg');
  }

  // Also copy original collections folder to public/assets/collections
  const colDest = 'public/assets/collections';
  if (!fs.existsSync(colDest)) fs.mkdirSync(colDest, { recursive: true });

  function copyRecursive(src, dest) {
    if (!fs.existsSync(src)) return;
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursive(path.join(src, childItemName), path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  copyRecursive('public/collections', colDest);

  console.log(`Copied ${files.length} jewelry asset files and full collections structure into public/assets/!`);
}

createAssetsFolder();
