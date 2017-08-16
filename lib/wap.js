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

program
  .version(pkg.version);

program
  .command('create <name>')
  .alias('c')
  .description('创建新项目')
  .action((name, options) => {
    require('./create')(name, options);
  });

program.parse(process.argv);

if (!program.args.length) program.help();
