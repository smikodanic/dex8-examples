const Echoer = require('echoer');
const { EventEmitter } = require('events');


module.exports = async (input) => {
  if (!input) { throw new Error('Input is required.'); }

  // create event emitter
  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(5); // 10 by default

  const echoer = new Echoer(true, 10, eventEmitter);

  // create array
  const n = 10;
  const arr = Array.from(Array(n).keys()); // [1,2,3,4, ...]

  // echoer in forEach loop
  arr.forEach(async val => {
    console.log(val);
    echoer.log('forEach::', val);
  });


  echoer.log();
  await new Promise(r => setTimeout(r, 2100));

  // echoer in for loop
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    echoer.log('for::', i);
  }



  return input;
};
