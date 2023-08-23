module.exports = (x, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;

  x.a = x.a + 1;
  echo.log('f2:: ', x.a);

  // get arr element and key
  const key = ff.lib.serialEachKey;
  const elem = ff.lib.serialEachElement;
  echo.log('serialEach::', key, elem);

  return x;
};
