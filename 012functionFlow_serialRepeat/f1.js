module.exports = (x, lib) => {
  const echoer = lib.echoer;
  const ff = global.functionFlow;

  x.a = x.a + 1;
  echoer.log('f1:: ', x.a);

  const iter = ff.lib.serialRepeatIteration;
  echoer.log('serialrepeat iteration=', iter);

  return x;
};
