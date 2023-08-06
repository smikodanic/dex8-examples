module.exports = async (x, lib) => {
  const echoer = lib.echoer;

  echoer.log('f1:: ', x);

  return new Promise(resolve => setTimeout(() => { resolve(x + 2); }, 1000));
};
