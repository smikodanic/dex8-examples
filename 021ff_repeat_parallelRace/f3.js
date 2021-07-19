module.exports = async(x, lib) => {
  await lib.echo.log('f3::', x);
  return x * 2;
};
