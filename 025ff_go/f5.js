module.exports = async (x, lib) => {
  x++;
  await lib.echo.log('f5:: ', x);
  return x;
};
