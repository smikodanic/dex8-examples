class MyLib {
  constructor() {
    this.z = 5;
  }
}

const f1 = require('./f1');

module.exports = async (input, lib) => {
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 1200});
  ff.libInject(lib);
  ff.libAdd({MyLib});

  const y = await ff.one(f1);

  return y; // or return ff.x;
};
