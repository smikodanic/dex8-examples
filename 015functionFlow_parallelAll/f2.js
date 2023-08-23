module.exports = (x, lib) => {
  const echo = lib.echo;

  echo.log('f2:: ', x);

  return new Promise(resolve => setTimeout(() => { resolve(x * 3); }, 3000));
};
