const fja2 = function (x, lib) {
  const echoer = lib.echoer;

  x.a++;
  echoer.log('f2:: ', x.a);

  return x;
};

module.exports = fja2;
