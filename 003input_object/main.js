const Echo = require('@mikosoft/echo');


module.exports = async (input, inputSecret) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = global.dex8.eventEmitter;
  const echo = new Echo(true, 10, eventEmitter);

  echo.log('myString:', input.myString);
  echo.objekt(input.myObject);

  return input;
};
