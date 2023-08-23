module.exports = async (x, lib) => {
  const echo = lib.echo;
  const ff = global.functionFlow;

  x.a = x.a + 1;
  echo.log('f1:: ', x.a);

  await ff.delay(1300);

  echo.warn('Echo after some delay.');

  return x;
};
