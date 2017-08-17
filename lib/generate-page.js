require('colors');
const path = require('path');
const mkdirp = require('mkdirp');
const utils = require('./utils');
const config = require('./config');

function generatePage(name) {
  // 判断目录是否存在
  if (!utils.isDirectory(config.srcDir)) {
    throw new Error(`源码目录不存在 ${config.srcDir}`);
  }
  // 判断app.json 是否存在
  if (!utils.isFile(path.join(config.srcDir, 'app.json'))) {
    throw new Error('app.json 文件不存在');
  }

  let pageName = name.replace(/\//g, '-');
  let fileBase = path.join(config.srcDir, 'pages', name);
  // 处理文件目录
  mkdirp.sync(path.dirname(fileBase));

  // 创建文件
  ['.js', '.wxml', '.less', '.json'].forEach((ext) => {
    let target = fileBase + ext;
    if (utils.isFile(target)) {
      console.log(`页面创建失败："${path.relative(config.workDir, target)}" 已经存在`.red);
      process.exit();
    }
    utils.copyAndReplace(path.join(__dirname, '../templates/page/page' + ext), target, {
      PAGE_NAME: pageName
    });
  });

  // 添加到app.json
  let appJsonFile = path.join(config.srcDir, 'app.json');
  let appJson = utils.readJSON(appJsonFile);
  appJson.pages.push(`pages/${name}`);
  utils.writeJSON(appJsonFile, appJson);
}

module.exports = generatePage;
