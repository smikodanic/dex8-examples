module.exports = function (x, lib) {
  const echoer = lib.echoer;
  const ff = global.functionFlow;

  x.a = x.a + 1;
  echoer.log('f1:: ', x.a);

  // get arr element and key
  const key = ff.lib.serialEachKey;
  const elem = ff.lib.serialEachElement;
  echoer.log('serialEach::', key, elem);

  return x;
};
