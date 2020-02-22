module.exports = (x, lib) => {
  x++;
  lib.echo.log('f5:: ', x);
  return x;
};
