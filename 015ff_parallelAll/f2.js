module.exports = (x, lib) => {
  lib.echo.log('f2:: ', x);
  return new Promise(resolve => setTimeout(() => {resolve(x * 3);}, 3000));
};
