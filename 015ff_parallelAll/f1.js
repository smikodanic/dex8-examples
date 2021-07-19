module.exports = async (x, lib) => {
  await lib.echo.log('f1:: ', x);
  return new Promise(resolve => setTimeout(() => {resolve(x + 2);}, 1000));
};
