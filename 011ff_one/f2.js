module.exports = (x, lib) => {
  x++;
  lib.echo.log('f2::', x);
  return x;
};
