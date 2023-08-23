async function fja1(x, lib) {
  const echo = lib.echo;

  x.a = x.a + 1;
  echo.log('f1:: ', x.a);

  return x;
}

module.exports = fja1;
