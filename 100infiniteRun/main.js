const FunctionFlow = require('functionflowx');
const Echo = require('echoer');
const { EventEmitter } = require('events');

const f1 = require('./f1.js');


module.exports = async (input) => {
  if (!input) { throw new Error('Input is required.'); }

  // create event emitter
  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(5); // 10 by default

  const ff = new FunctionFlow({ debug: false, msDelay: 800 }, eventEmitter);
  const echo = new Echo(true, 10, eventEmitter);

  const x = { a: input.a, b: 'B' };
  const lib = { input, echo };
  ff.xInject(x);
  ff.libInject(lib);

  await ff.one(f1);
  const output = await ff.repeat(50000);

  return output;
};
