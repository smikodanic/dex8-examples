module.exports = async (x, lib) => {
  const echo = lib.echo;
  const ff = global.functionFlow;

  echo.log();
  await ff.delay(2100);
  echo.warn(`==== repeat() iteration ${ff.iteration} ====`);

  x.a = x.a + 1;
  echo.log('f1:: ', x.a);

  return x;
};
