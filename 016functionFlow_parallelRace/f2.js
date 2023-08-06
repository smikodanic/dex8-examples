module.exports = (x, lib) => {
  const echoer = lib.echoer;

  echoer.log('f2:: ', x);

  return new Promise(resolve => setTimeout(() => { resolve(x * 3); }, 3000));
};
