module.exports = (x, lib) => {
  const echoer = lib.echoer;

  x.a = x.a + 1;
  echoer.log('f3:: ', x.a);

  return x;
};
