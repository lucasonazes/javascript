const fs = require('fs').promises;

module.exports = (path, data) => {
    fs.writeFile(path, data, { flag: 'w'}); // flag 'w' creates a new file, tag 'a' adds the content at the end of the file
};