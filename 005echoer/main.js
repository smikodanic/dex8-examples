const Echoer = require('echoer');
const { EventEmitter } = require('events');


module.exports = async (input) => {
  if (!input) { throw new Error('Input is required.'); }

  // create event emitter
  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(5); // 10 by default

  const echoer = new Echoer(true, 10, eventEmitter);

  // echo pure string
  echoer.log('rnd = ', Math.random().toFixed(6), ' --- ok');
  echoer.log('A', 'B');
  echoer.log('C');

  // echo JS object
  echoer.objekt({ a: 1, b: 'some string', is_active: false });

  // echo internal error
  echoer.error(new Error('This is the intentional error !')); // this error will not break robot because we didn't throw it

  // echo warning
  echoer.warn('This is the warning message.');

  await new Promise(r => setTimeout(r, 1300));

  // echo in the for loop
  for (let i = 1; i <= 100; i++) {
    echoer.log(` - from for loop - iteration #${i}`);
  }


  return input;
};
