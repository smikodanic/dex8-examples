const dbconnect = require('./dbconnect');
const dbinsert = require('./dbinsert');
const dblist = require('./dblist');
const dbdisconnect = require('./dbdisconnect');


module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 1300});
  ff.xInject(input);
  ff.libInject(lib);

  echo.log('input::', input);

  const y = await ff.serial([dbconnect, dbinsert, dblist, dbdisconnect]);
  await ff.delay(3400);

  echo.log('output::', y);
  return y; // or return ff.x;
};
