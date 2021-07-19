module.exports = async (x, lib) => {
  x++;
  await lib.echo.log('f6:: ', x);
  return x;
};
