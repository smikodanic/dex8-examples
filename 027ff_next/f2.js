module.exports = (x, lib) => {
  x++;
  lib.echo.log('f2::', x);
  lib.ff.next();
  return x;
};
