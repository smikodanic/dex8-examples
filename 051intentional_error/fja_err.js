module.exports = async (x, lib) => {
  lib.echo.log('Function fja_err() executed.');
  await lib.ff.delay(700);
  throw new Error('My intentional error which breaks task!!!');
};
