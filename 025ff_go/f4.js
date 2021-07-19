module.exports = async (x, lib) => {
  x++;
  await lib.echo.log('f4:: ', x);
  lib.ff.go(6); // go to f6
  return x;
};
