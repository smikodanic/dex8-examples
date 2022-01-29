const bluebird = require('bluebird');

const func1 = require('./func1');

module.exports = async (input, lib) => {
  if (!input) { throw new Error('Input is required.'); }

  const ff = lib.ff;
  const echo = lib.echo;

  // define x (transitional context variable)
  const x = {};

  ff.setOpts({ debug: false, msDelay: 1300 });
  ff.xInject(x);
  ff.libInject(lib);
  ff.libAdd({ input, bluebird });


  await ff.one(func1);

  return input;
};
