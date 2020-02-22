const fja2 = function (x, lib) {
  const echo = lib.echo;

  x.a++;
  echo.log('f2:: ', x.a);
  return x;
};

module.exports = fja2;
