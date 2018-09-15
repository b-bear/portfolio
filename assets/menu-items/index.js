const { lstatSync, readdirSync, readFileSync } = require('fs');
const { join } = require('path');

console.log(__dirname);
const isDirectory = absPath => lstatSync(absPath).isDirectory();
const getDirectories = rootDir => readdirSync(rootDir)
  .map(folderName => ({
    absPath: join(rootDir, folderName),
    slug: folderName,
  })).filter(item => isDirectory(item.absPath));

const directories = getDirectories(__dirname);

export default directories.map((item) => {
  const content = readFileSync(join(item.absPath, 'content.md'), 'utf8'); // eslint-disable-line
  const data = require(join(item.absPath, 'data.js')); // eslint-disable-line
  return { slug: item.slug, content, data };
});
