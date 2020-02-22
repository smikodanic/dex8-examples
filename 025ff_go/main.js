const f0 = require('./f0');
const f1 = require('./f1');
const f2 = require('./f2'); // contains go(1)
const f3 = require('./f3');
const f4 = require('./f4'); // contains go(6)
const f5 = require('./f5');
const f6 = require('./f6');



module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;
  ff.setOpts({debug: false, msDelay: 1300});
  ff.xInject(input);
  ff.libInject(lib);

  echo.log('input::', input);

  const y = await ff.serial([f0, f1, f2, f3, f4, f5, f6]);

  echo.log('output::', y);
  return y; // or return ff.x;
};





/*
(22.Feb.2020 10:51:17.329) Task "025ff_go" started on 22.2.2020 10:51:17
(22.Feb.2020 10:51:17.342) input:: 5
(22.Feb.2020 10:51:17.343) f0::  6
(22.Feb.2020 10:51:18.647) f1::  7
(22.Feb.2020 10:51:19.950) f2::  8
(22.Feb.2020 10:51:21.253) f1::  9
(22.Feb.2020 10:51:22.555) f2::  10
(22.Feb.2020 10:51:23.856) f1::  11
(22.Feb.2020 10:51:25.158) f2::  12
(22.Feb.2020 10:51:26.460) f1::  13
(22.Feb.2020 10:51:27.762) f2::  14
(22.Feb.2020 10:51:29.065) f3::  15
(22.Feb.2020 10:51:30.368) f4::  16
(22.Feb.2020 10:51:31.670) f6::  17
(22.Feb.2020 10:51:32.973) output:: 17
(22.Feb.2020 10:51:32.974) Task "025ff_go" is ended on 22.2.2020 10:51:32
*/
