module.exports = async (x, lib) => {
  const input = lib.input;

  await lib.echo.log('f1::', x, input.name);
  x++;
  return x;
};
