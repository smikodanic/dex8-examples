const Echoer = require('echoer');
const FunctionFlow = require('functionflowx');
const { EventEmitter } = require('events');

const f1 = require('./f1.js');
const f2_err = require('./f2_err.js'); // throws error
const f3 = require('./f3.js');

module.exports = async (input) => {
  if (!input) { throw new Error('Input is required.'); }

  // create event emitter
  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(5); // 10 by default

  const echoer = new Echoer(true, 10, eventEmitter);
  const ff = new FunctionFlow({ debug: false, msDelay: 800 }, eventEmitter);

  const x = { a: input.a };
  const lib = { input, echoer };
  ff.xInject(x);
  ff.libInject(lib);

  const output = await ff.serial([f1, f2_err, f3]);

  await ff.delay(1300);

  return output;
};
