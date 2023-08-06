const fja2 = function (x, lib) {
  const echoer = lib.echoer;

  x.a++;
  echoer.log('f2:: ', x.a);

  throw new Error('My intentional error which breaks the task !!!');
};

module.exports = fja2;
