const Echo = require('@mikosoft/echo');
const FunctionFlow = require('@mikosoft/functionflow');

const f1 = require('./f1.js');
const f2 = require('./f2.js');
const f3 = require('./f3.js');

module.exports = async (input, library) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = library.eventEmitter;

  const echo = new Echo(true, 10, eventEmitter);
  const ff = new FunctionFlow({ debug: false, msDelay: 800 }, eventEmitter);

  const x = input; // Notice: input.json contain just one number
  const lib = { input, echo };
  ff.xInject(x);
  ff.libInject(lib);

  const output = await ff.parallelAll([f1, f2, f3]);

  return output;
};
