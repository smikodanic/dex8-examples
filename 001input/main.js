const Echo = require('@mikosoft/echo');


module.exports = async (input, inputSecret) => {
  if (!input) { throw new Error('Input is required.'); }
  console.log('input::', input);
  console.log('inputSecret::', inputSecret);

  const eventEmitter = global.dex8.eventEmitter;
  const echo = new Echo(true, 10, eventEmitter);
  echo.log('   a = ', input.a);

  return input;
};
