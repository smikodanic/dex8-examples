const fja3 = async (x, lib) => {
  const echoer = lib.echoer;

  x.a = x.a + 1;
  await echoer.log('f3:: ', x.a);
  return x;
};

module.exports = fja3;
