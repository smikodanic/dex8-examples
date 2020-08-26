module.exports = async (input, lib) => {
  if (!input) { throw new Error('Input is required.'); }

  const ff = lib.ff;
  const echo = lib.echo;
  // echo.short = true;


  // echo pure string
  echo.log('rnd = ', Math.random().toFixed(6), ' --- ok');
  await ff.delay(2100);

  // echo JS object
  echo.objekt({a: 1, b: 'some string', is_active: false});
  await ff.delay(2100);

  // echo internal error
  echo.error(new Error('Intentional error !')); // this error will not break robot because we didn't throw it
  await ff.delay(2100);


  return input;
};
