module.exports = (x, lib) => {
  x++;
  lib.echo.log('f3::', x);
  return x;
};
