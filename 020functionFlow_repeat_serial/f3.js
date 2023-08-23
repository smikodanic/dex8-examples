module.exports = (x, lib) => {
  const echo = lib.echo;

  x.a = x.a + 1;
  echo.log('f3:: ', x.a);

  return x;
};
