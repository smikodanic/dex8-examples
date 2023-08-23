const Echo = require('@mikosoft/echo');
const FunctionFlow = require('@mikosoft/functionflow');

const f1 = require('./f1.js');
const f2_err = require('./f2_err.js'); // throws error
const f3 = require('./f3.js');

module.exports = async (input, library) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = library.eventEmitter;

  const echo = new Echo(true, 10, eventEmitter);
  const ff = new FunctionFlow({ debug: false, msDelay: 800 }, eventEmitter);

  const x = { a: input.a };
  const lib = { input, echo };
  ff.xInject(x);
  ff.libInject(lib);

  const output = await ff.serial([f1, f2_err, f3]);

  await ff.delay(1300);

  return output;
};
