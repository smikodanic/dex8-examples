const f1 = require('./f1.js');
const f2 = require('./f2.js');
const f3 = require('./f3.js');


module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 700});
  ff.xInject(input);
  ff.libInject(lib);

  echo.log('input::', input.a);

  await ff.serial([f1, f2, f3]);
  const y = await ff.repeat(3); // repeats ff.serial 3 times

  echo.log('output::', y.a);

  return y; // or return ff.x;
};
