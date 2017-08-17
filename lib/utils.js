const fs = require('fs');

exports.isFile = function isFile(path) {
  try {
    return fs.statSync(path).isFile();
  } catch (error) {
    return false;
  }
};

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

exports.copyAndReplace = function copyAndReplace(src, target, replaces) {
  let data = fs.readFileSync(src, 'utf-8');
  for (let key in replaces) {
    data = data.replace(new RegExp(exports.escapeRegExp(key), g), replaces[key]);
  }
  fs.writeFileSync(target, data);
};

exports.escapeRegExp = function escapeRegExp(str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  return str.replace(/[\-\[\]\{\}\(\)\/\*\+\?\.\\\^\$\|]/g, '\\$&');
};
