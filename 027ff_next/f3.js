module.exports = async (x, lib) => {
  x++;
  await lib.echo.log('f3::', x);
  return x;
};
