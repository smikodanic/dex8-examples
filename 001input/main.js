module.exports = async (input, lib) => {
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 2100});

  const echo = lib.echo;

  await ff.delay(1300);
  echo.log('   a = ', input.a);
  await ff.delay(3400);

  return input;
};
