module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;

  const x = 0;

  ff.setOpts({ debug: false, msDelay: 1300 });
  ff.xInject(x);
  ff.libInject(lib);
  ff.libAdd({ input });

  // create array
  const n = 10;
  const arr = Array.from(Array(n).keys()); // [1,2,3,4, ...]

  // send echo in the forEach
  //arr.forEach(async val => {
  //console.log(val);
  //await echo.log('forEach::', val);
  //});

  for (let i = 1; i <= 10; i++) {
    console.log(i);
    echo.log('for::', i);
  }

  await ff.delay(3400);

  return;
};
