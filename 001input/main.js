module.exports = async (input, lib) => {
  if (!input) { throw new Error('Input is required.'); }

  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 2100});

  const echo = lib.echo;

  await ff.delay(1300);
  await echo.log('   a = ', input.a);
  await ff.delay(3400);

  return input;
};
