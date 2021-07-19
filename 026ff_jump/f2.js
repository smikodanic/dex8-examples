module.exports = async (x, lib) => {
  const echo = lib.echo;

  x++;
  await echo.log('f2::', x);
  await echo.log('iteration:: ', lib.ff.iteration);
  if (lib.ff.iteration === 2) { lib.ff.jump(10); } // on 2nd iteration jump to last iteration
  return x;
};
