module.exports = (x, lib) => {
  const libs = lib.ff.libList();
  lib.echo.objekt(libs);
  return x;
};
