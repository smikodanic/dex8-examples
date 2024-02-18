const Echo = require('@mikosoft/echo');


module.exports = async (input, inputSecret) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = global.dex8.eventEmitter;
  const echo = new Echo(true, 300, eventEmitter);

  await echo.log(input.a);

  // echo the image
  const img_b64 = input.img_b64;
  await echo.image(img_b64);

  await echo.log(input.a++);

  return input.a;
};
