module.exports = async (x, lib) => {
  const echoer = lib.echoer;

  echoer.log('f3:: ', x);

  return x + 1;
};
