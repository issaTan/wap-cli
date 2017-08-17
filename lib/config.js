const configData = {
  srcDir: 'src',
  distSrc: 'dist',
  get workDir() {
    return process.cwd() + '/';
  }
};

module.exports = configData;
