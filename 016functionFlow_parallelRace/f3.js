module.exports = async (x, lib) => {
  const echo = lib.echo;

  echo.log('f3:: ', x);

  return x + 1;
};
