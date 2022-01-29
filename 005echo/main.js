module.exports = async (input, lib) => {
  if (!input) { throw new Error('Input is required.'); }

  const ff = lib.ff;
  const echo = lib.echo;

  // echo pure string
  await echo.log('rnd = ', Math.random().toFixed(6), ' --- ok');
  await echo.log('A');
  await echo.log('B');

  // echo JS object
  await echo.objekt({ a: 1, b: 'some string', is_active: false });

  // echo internal error
  await echo.error(new Error('Intentional error !')); // this error will not break robot because we didn't throw it

  await ff.delay(2100);

  // echo in the for loop
  for (let i = 1; i <= 100; i++) {
    await echo.log(` - from for loop - iteration #${i}`);
  }

  return input;
};
