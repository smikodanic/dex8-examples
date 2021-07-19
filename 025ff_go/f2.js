module.exports = async (x, lib) => {
  x++;
  await lib.echo.log('f2:: ', x);
  if (x < 13 ) { lib.ff.go(1); } // go back to f1
  return x;
};
