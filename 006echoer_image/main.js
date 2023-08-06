const Echoer = require('echoer');
const { EventEmitter } = require('events');


module.exports = async (input) => {
  if (!input) { throw new Error('Input is required.'); }

  // create event emitter
  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(5); // 10 by default

  const echoer = new Echoer(true, 10, eventEmitter);

  // echo the image
  const img_b64 = input.img_b64;
  echoer.image(img_b64);

  return;
};
