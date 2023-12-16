const Echo = require('@mikosoft/echo');


module.exports = async (input, library = {}) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = library.eventEmitter;

  const echo = new Echo(true, 10, eventEmitter);

  echo.log('myPassword:: ', input.myPassword);
  echo.objekt(input.myObject);

  return input;
};
