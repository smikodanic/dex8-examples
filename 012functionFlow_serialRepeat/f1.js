module.exports = (x, lib) => {
  const echo = lib.echo;
  const ff = global.functionFlow;

  x.a = x.a + 1;
  echo.log('f1:: ', x.a);

  const iter = ff.lib.serialRepeatIteration;
  echo.log('serialrepeat iteration=', iter);

  return x;
};
