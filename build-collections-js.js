const fs = require('fs');

const b64Data = fs.readFileSync('collections-b64-data.json', 'utf8');

// Write clean window.GREEK_COLLECTIONS assignment
const jsContent = `window.GREEK_COLLECTIONS = ${b64Data};`;

fs.writeFileSync('collections-data.js', jsContent);
console.log('Successfully generated collections-data.js (Size:', (jsContent.length / 1024 / 1024).toFixed(2), 'MB)');
