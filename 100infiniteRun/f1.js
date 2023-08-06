module.exports = async (x, lib) => {
  const input = lib.input;
  const echo = lib.echo;

  x.a++;
  echo.log('f1::', x.a, input.username);

  return x;
};
