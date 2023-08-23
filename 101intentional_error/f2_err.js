const fja2 = function (x, lib) {
  const echo = lib.echo;

  x.a++;
  echo.log('f2:: ', x.a);

  throw new Error('My intentional error which breaks the task !!!');
};

module.exports = fja2;
