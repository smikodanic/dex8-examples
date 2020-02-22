const f1 = require('./f1');


module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 1000});
  ff.xInject(input);
  ff.libInject(lib);

  echo.log('input::', input);

  await ff.one(f1);
  const y = await ff.repeat(50000);

  echo.log('output::', y);
  return y; // or return ff.x;
};
