require('colors');
const program = require('commander');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

const notifier = updateNotifier({
  pkg,
  callback(error, update) {
    if (update && ['major', 'minor', 'patch'].indexOf(update.type) > -1) {
      notifier.update = update;
      notifier.notify({
        defer: false
      });
    }
  }
});

// 判断node、NPM 版本
if (Number(process.version.match(/^v(\d+.\d+)/)[1]) < 5) {
  console.log('检测到当前Node.js 版本过低，请升级Node.js 到5以上版本， NPM 升级到3 以上版本'.red);
  process.exit(1);
}

program
  .version(pkg.version);

// 创建项目
program
  .command('create <name>')
  .alias('c')
  .description('创建新项目')
  .action((name, options) => {
    require('./create')(name, options);
  });

// 创建页面
program
  .command('generate page <name>')
  .alias('g')
  .description('创建新页面')
  .action((name, options) => {
    require('./generate-page')(name, options);
  });

program.parse(process.argv);

if (!program.args.length) program.help();
