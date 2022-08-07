module.exports = async (input, lib) => {
  if (!input) { throw new Error('Input is required.'); }

  const ff = lib.ff;
  const echo = lib.echo;
  console.log(echo);

  // echo pure string
  await echo.log('rnd = ', Math.random().toFixed(6), ' --- ok');
  await echo.log('A', 'B');
  await echo.log('C');

  // echo JS object
  await echo.objekt({ a: 1, b: 'some string', is_active: false });

  // echo internal error
  await echo.error(new Error('This is the intentional error !')); // this error will not break robot because we didn't throw it

  // echo warning
  await echo.warn('This is the warning message.');

  await ff.delay(2100);

  // echo in the for loop
  for (let i = 1; i <= 100; i++) {
    await echo.log(` - from for loop - iteration #${i}`);
  }

  return input;
};
