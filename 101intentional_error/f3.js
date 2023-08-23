const fja3 = async (x, lib) => {
  const echo = lib.echo;

  x.a = x.a + 1;
  await echo.log('f3:: ', x.a);
  return x;
};

module.exports = fja3;
