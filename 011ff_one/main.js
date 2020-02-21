const f1 = require('./f1.js');
const f2 = require('./f2.js');


module.exports = async (input, lib) => {
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 2100});

  try {
    ff.xInject(input);
    ff.libInject(lib);

    await ff.one(f1);
    const y = await ff.one(f2);
    return y; // or return ff.x;

  } catch(err) {
    throw err;
  }
};
