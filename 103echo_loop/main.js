const Echo = require('@mikosoft/echo');


module.exports = async (input, library = {}) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = library.eventEmitter;

  const echo = new Echo(true, 10, eventEmitter);

  // create array
  const n = 10;
  const arr = Array.from(Array(n).keys()); // [1,2,3,4, ...]

  // echo in forEach loop
  arr.forEach(async val => {
    console.log(val);
    echo.log('forEach::', val);
  });


  echo.log();
  await new Promise(r => setTimeout(r, 2100));

  // echo in for loop
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    echo.log('for::', i);
  }



  return input;
};
