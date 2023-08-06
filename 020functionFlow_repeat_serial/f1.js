module.exports = async (x, lib) => {
  const echoer = lib.echoer;
  const ff = global.functionFlow;

  echoer.log();
  await ff.delay(2100);
  echoer.warn(`==== repeat() iteration ${ff.iteration} ====`);

  x.a = x.a + 1;
  echoer.log('f1:: ', x.a);

  return x;
};
