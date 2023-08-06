async function fja1(x, lib) {
  const echoer = lib.echoer;

  x.a = x.a + 1;
  echoer.log('f1:: ', x.a);

  return x;
}

module.exports = fja1;
