module.exports = async (x, lib) => {
  x++;
  await lib.echo.log('f1::', x);
  return x;
};
