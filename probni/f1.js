module.exports = async (x, lib) => {
  const echo = lib.echo;

  x.a++;
  await echo.log('f1::', x);
  return x;
};
