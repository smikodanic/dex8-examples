const Echoer = require('echoer');
const FunctionFlow = require('functionflowx');
const { EventEmitter } = require('events');

const f1 = require('./f1.js');
const f2 = require('./f2.js');
const f3 = require('./f3.js');

module.exports = async (input) => {
  if (!input) { throw new Error('Input is required.'); }

  // create event emitter
  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(5); // 10 by default

  const echoer = new Echoer(true, 10, eventEmitter);
  const ff = new FunctionFlow({ debug: false, msDelay: 800 }, eventEmitter);

  const x = input; // Notice: input.json contain just one number
  const lib = { input, echoer };
  ff.xInject(x);
  ff.libInject(lib);

  await ff.parallelRace([f1, f2, f3]);
  const output = await ff.repeat(3);

  return output;
};
