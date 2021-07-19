module.exports = async (x, lib) => {
  const libs = lib.ff.libList();
  await lib.echo.objekt(libs);
  return x;
};
