const f1 = require('./f1.js');
const f2 = require('./f2.js');
const f3 = require('./f3.js');


module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 3400});
  ff.xInject(input);
  ff.libInject(lib);

  await echo.log('input::', input);

  await ff.parallelRace([f1, f2, f3]);
  const y = await ff.repeat(3); // repeats ff.parallelRace 3 times

  await echo.log('output::', y);
  return y; // or return ff.x;
};
