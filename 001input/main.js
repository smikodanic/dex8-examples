const Echo = require('@mikosoft/echo');


module.exports = async (input, library) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = library.eventEmitter;
  const echo = new Echo(true, 10, eventEmitter);
  echo.log('   a = ', input.a);

  return input;
};
