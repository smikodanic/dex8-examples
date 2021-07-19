module.exports = async (x, lib) => {
  await lib.echo.log('Function fja() executed.');
  return x;
};
