// convert.js
const fs = require('fs');

// Step 1: Read dict.json
const data = JSON.parse(fs.readFileSync('dict.json', 'utf8'));

// Step 2: Transform the structure
const transformed = {};

data.forEach(book => {
  const chapterData = {};

  book.chapters.forEach(ch => {
    chapterData[`chapter${ch.chapter}`] = parseInt(ch.verses);
  });

  transformed[book.book] = [chapterData]; // full book name as key
});

// Step 3: Write to a new file
fs.writeFileSync('transformed.json', JSON.stringify(transformed, null, 2));

console.log('✅ transformed.json created successfully!');
