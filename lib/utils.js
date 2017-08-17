const fs = require('fs');

/**
 * 判断是否是文件
 */
exports.isFile = function isFile(path) {
  try {
    return fs.statSync(path).isFile();
  } catch (error) {
    return false;
  }
};

/**
 * 判断是否是文件目录
 */
exports.isDirectory = function isDirectory(path) {
  try {
    return fs.statSync(path).isDirectory();
  } catch (e) {
    return false;
  }
};

/**
 * 读取JSON 文件
 */
exports.readJSON = function readJSON(file) {
  let data = fs.readFileSync(file, 'utf-8');
  return JSON.parse(data);
};

/**
 * 写入JSON 文件
 */
exports.writeJSON = function writeJSON(file, data) {
  return fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

/**
 * 复制并处理文件
 */
exports.copyAndReplace = function copyAndReplace(src, target, replaces) {
  let data = fs.readFileSync(src, 'utf-8');
  for (let key in replaces) {
    data = data.replace(new RegExp(exports.escapeRegExp(key), 'g'), replaces[key]);
  }
  fs.writeFileSync(target, data);
};

/**
 * 生成安全的正则表达式
 */
exports.escapeRegExp = function escapeRegExp(str) {
  if (str && str.toString) str = str.toString();
  if (typeof str !== 'string' || !str.length) return '';
  return str.replace(/[\-\[\]\{\}\(\)\/\*\+\?\.\\\^\$\|]/g, '\\$&');
};
