module.exports = (x, lib) => {
  x++;
  lib.echo.log('f0:: ', x);
  return x;
};
