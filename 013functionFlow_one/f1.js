module.exports = async (x, lib) => {
  const echoer = lib.echoer;
  const ff = global.functionFlow;

  x.a = x.a + 1;
  echoer.log('f1:: ', x.a);

  await ff.delay(1300);

  echoer.warn('Echo after some delay.');

  return x;
};
