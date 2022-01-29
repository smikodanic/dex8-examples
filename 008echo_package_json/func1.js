module.exports = async (x, lib) => {
  const bluebird = lib.bluebird;
  const echo = lib.echo;

  await echo.log('bluebird::', bluebird);
};
