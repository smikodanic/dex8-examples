const fja2 = async function (x, lib) {
  const echo = lib.echo;

  x.a++;
  await echo.log('f2:: ', x.a);
  return x;
};

module.exports = fja2;
