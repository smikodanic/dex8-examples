const FunctionFlow = require('@mikosoft/functionflow');
const Echo = require('@mikosoft/echo');

const f1 = require('./f1.js');


module.exports = async (input, inputSecret) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = global.dex8.eventEmitter;
  const ff = new FunctionFlow({ debug: false, msDelay: 800 }, eventEmitter);
  const echo = new Echo(true, 10, eventEmitter);

  const x = { a: input.a, b: input.b };
  const lib = { input, echo };
  ff.xInject(x);
  ff.libInject(lib);

  await ff.one(f1);
  const output = await ff.repeat(50000);

  return output;
};
