const fs = require('fs').promises;

module.exports = (path, data) => {
  return fs.writeFile(path, data, 'utf8');
};