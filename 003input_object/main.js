module.exports = async (input, lib) => {
  if (!input) { throw new Error('Input is required.'); }

  const ff = lib.ff;
  const echo = lib.echo;

  await ff.delay(1300);
  await echo.log('myPassword:: ', input.myPassword);
  await ff.delay(2100);
  await echo.objekt(input.myObject);
  await ff.delay(2100);

  return input;
};
