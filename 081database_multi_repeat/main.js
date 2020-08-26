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

  await ff.one(dbconnect);
  await ff.one(dbinsert);
  await ff.repeat(3); // repeat dbinsert 3x e.g. insert 3 docs
  const y = await ff.serial([dblist, dbdisconnect]);


  echo.log('output::', y);
  return y; // or return ff.x;
};
