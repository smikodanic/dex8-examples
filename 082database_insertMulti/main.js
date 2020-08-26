const dbconnect = require('./dbconnect');
const dbinsertMulti = require('./dbinsertMulti');
const dblist = require('./dblist');
const dbdisconnect = require('./dbdisconnect');


module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 1300});
  ff.xInject(input);
  ff.libInject(lib);

  echo.log('input::', input);

  await ff.one(dbconnect);
  await ff.one(dbinsertMulti);
  const y = await ff.serial([dblist, dbdisconnect]);


  echo.log('y::', y);
  return y; // or return ff.x;
};
