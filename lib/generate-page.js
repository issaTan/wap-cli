require('colors');
const path = require('path');
const mkdirp = require('mkdirp');
const utils = require('./utils');
const config = require('./config');

function generatePage(name) {
  if (!utils.isDirectory(config.srcDir)) {
    throw new Error(`源码目录不存在 ${config.srcDir}`);
  }
  if (!utils.isFile(config.distSrc + 'app.json')) {
    throw new Error('app.json 文件不存在');
  }

  let pageName = name.replace(/\//g, '-');
  let fileBase = path.join(config.srcDir, 'pages', name);

  mkdirp.sync(path.dirname(fileBase));

  // 创建文件
  ['.js', '.wxml', '.less', '.json'].forEach((ext) => {
    let target = fileBase + ext;
    if (utils.isFile(target)) {
      console.log(`页面创建失败："${path.relative(config.workDir, target)}" 已经存在`.red);
      process.exit();
    }
    utils.copyAndReplace(path.join(__dirname, '../templates/pages/page' + ext), target, {
      PAGE_NAME: pageName
    });
  });

  // 添加到app.json
  let appJsonFile = path.json(__dirname, 'app.json');
  let appJson = utils.readJSON(appJsonFile);
  appJson.pages.push(`pages/${name}`);
  utils.writeJSON(appJsonFile, appJson);
}

module.exports = generatePage;
