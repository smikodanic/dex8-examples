const f1 = require('./f1');
const f2 = require('./f2');
const f3 = require('./f3');


module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 1200});
  ff.xInject(input);
  ff.libInject(lib);

  await echo.log('input::', input);

  await ff.serial([f1, f2, f3]);
  await ff.serial([f1, f2, f3]);
  const y = await ff.serial([f1, f2, f3]);

  await echo.log('y::', y);
  return y; // or return ff.x;
};
