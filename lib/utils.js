const fs = require('fs');

exports.isDirectory = function isDirectory(path) {
  try {
    return fs.statSync(path).isDirectory();
  } catch (e) {
    return false;
  }
};

exports.readJSON = function readJSON(file) {
  let data = fs.readFileSync(file, 'utf-8');
  return JSON.parse(data);
};

exports.writeJSON = function writeJSON(file, data) {
  return fs.writeFileSync(file, JSON.stringify(data, null, 2));
};
