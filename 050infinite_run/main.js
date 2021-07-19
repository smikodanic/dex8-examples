const f1 = require('./f1');


module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;

  // await echo.log(Object.keys(lib));
  // if (!input) { await echo.error(new Error('Input is not selected.')); return; }

  const x = 0;

  ff.setOpts({debug: false, msDelay: 1300});
  ff.xInject(x);
  ff.libInject(lib);
  ff.libAdd({input});

  await ff.one(f1);
  const y = await ff.repeat(50000);

  await echo.log('output::', y);
  return y; // or return ff.x;
};
