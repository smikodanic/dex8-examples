const Echo = require('@mikosoft/echo');
const FunctionFlow = require('@mikosoft/functionflow');

const f1 = require('./f1.js');
const f2 = require('./f2.js');
const f3 = require('./f3.js');


module.exports = async (input, inputSecret) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = global.dex8.eventEmitter;
  const echo = new Echo(true, 10, eventEmitter);
  const ff = new FunctionFlow({ debug: false, msDelay: 1300 }, eventEmitter);

  const x = { a: input.a };
  const lib = { input, echo };
  ff.xInject(x);
  ff.libInject(lib);

  const output = await ff.serialRepeat([f1, f2, f3], 2);

  await ff.delay(1300);

  return output;
};
