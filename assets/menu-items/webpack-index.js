
const dir = './';
// requires and returns all modules that match
const directories = require.context('./', true, /^\.\/.*\.md$/).keys();

export default directories.map((item) => {
  const slug = item.replace(dir, '').split('/')[0];
  let dirPath = item.split('/');
  dirPath.pop();
  dirPath = dirPath.join('/');
  const content = require(`${dirPath}/content.md`); // eslint-disable-line
  const data = require(`${dirPath}/data.js`); // eslint-disable-line
  return { slug, content, data };
});
