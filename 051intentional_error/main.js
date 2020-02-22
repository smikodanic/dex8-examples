const fja = require('./fja.js');
const fja_err = require('./fja_err.js');


module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 3400});
  ff.libInject(lib);

  const y = await ff.serial([fja, fja_err]);

  return y; // or return ff.x;
};
