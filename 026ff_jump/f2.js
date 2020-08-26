module.exports = (x, lib) => {
  x++;
  lib.echo.log('f2::', x);
  console.log('iteration:: ', lib.ff.iteration);
  if (lib.ff.iteration === 2) { lib.ff.jump(10); } // on 2nd iteration jump to last iteration
  return x;
};
