module.exports = async (x, lib) => {
  x++;
  await lib.echo.log('f0:: ', x);
  return x;
};
