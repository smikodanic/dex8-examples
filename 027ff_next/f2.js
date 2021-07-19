module.exports = async (x, lib) => {
  x++;
  await lib.echo.log('f2::', x);
  lib.ff.next();
  return x;
};
