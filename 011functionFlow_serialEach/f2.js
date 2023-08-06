module.exports = (x, lib) => {
  const echoer = lib.echoer;
  const ff = lib.ff;

  x.a = x.a + 1;
  echoer.log('f2:: ', x.a);

  // get arr element and key
  const key = ff.lib.serialEachKey;
  const elem = ff.lib.serialEachElement;
  echoer.log('serialEach::', key, elem);

  return x;
};
