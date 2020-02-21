const f1 = require('./f1.js');
const f2 = require('./f2.js');
const f3 = require('./f3.js');


module.exports = async (input, lib) => {
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 2100});
  const echo = lib.echo;

  ff.xInject(input);
  ff.libInject(lib);

  // parallelAll will send output after 3 seconds because fja2 will need the longest time interval to be fulfilled (3 seconds)
  const y = await ff.parallelRace([f1, f2, f3]);
  echo.log(' +++ Result from function f3 will be returned as fastest function.');
  echo.log('output result is:', y);


  return y; // or return ff.x;

};
