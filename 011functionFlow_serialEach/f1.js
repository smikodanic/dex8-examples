module.exports = function (x, lib) {
  const echo = lib.echo;
  const ff = global.functionFlow;

  x.a = x.a + 1;
  echo.log('f1:: ', x.a);

  // get arr element and key
  const key = ff.lib.serialEachKey;
  const elem = ff.lib.serialEachElement;
  echo.log('serialEach::', key, elem);

  return x;
};
