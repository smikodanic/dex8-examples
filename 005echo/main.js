const Echo = require('@mikosoft/echo');
const { HttpClientPptr } = require('@mikosoft/httpclient-pptr');


module.exports = async (input, library) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = library.eventEmitter;
  const echo = new Echo(true, 10, eventEmitter);

  // echo pure string
  echo.log('rnd = ', Math.random().toFixed(6), ' --- ok');
  echo.log('A', 'B');
  echo.log('C');

  // echo JS object
  echo.objekt({ a: 1, b: 'some string', is_active: false });

  // echo internal error
  echo.error(new Error('This is the intentional error !')); // this error will not break robot because we didn't throw it

  // echo warning
  echo.warn('This is the warning message.');

  await new Promise(r => setTimeout(r, 1300));

  // echo in the for loop
  for (let i = 1; i <= 5; i++) {
    echo.log(` - from for loop - iteration #${i}`);
  }


  // echo objekt
  console.log(HttpClientPptr);


  return input;
};
