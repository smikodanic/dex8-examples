module.exports = async (input, lib) => {
  const ff = lib.ff;
  const echo = lib.echo;

  echo.log('rnd = ', Math.random().toFixed(6), ' --- ok');
  await ff.delay(2100);

  echo.objekt({a: 1, b: 'some string', is_active: false});
  await ff.delay(2100);

  echo.error(new Error('Intentional error !')); // this error will not break robot because we didn't throw it
  await ff.delay(2100);


  // send on success (send message and object at the same time)
  const msg = 'My message.';
  const obj = {success: true, msg: 'Object is sent', data: [{x: 1}, {x: 2}]};
  echo.send({msg, obj});
  await ff.delay(2100);


  // send on failed
  const err = new Error('Some err');
  echo.send({err});
  await ff.delay(2100);

  return input;
};
