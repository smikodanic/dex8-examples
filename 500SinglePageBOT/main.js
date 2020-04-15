const puppeteer = require('puppeteer');

// functions
const browserTab = require('./010browserTab');
const correctURL = require('./020correctURL');
const openPage = require('./030openPage');
const extractor = require('./040extractor');
const filter = require('./050filter');
const corrector = require('./060corrector');
const browserClose = require('./100browserClose');


module.exports = async (input, lib) => {
  const echo = lib.echo;
  const ff = lib.ff;

  ff.setOpts({debug: false, msDelay: 1200});
  ff.xInject(input);
  ff.libInject(lib);
  ff.libAdd({puppeteer});

  const y = await ff.serial([
    browserTab,
    correctURL,
    openPage,
    extractor,
    filter,
    corrector,
    browserClose
  ]);
  await ff.delay(2100);

  ff.x.results_count = ff.x.results.length;
  echo.objekt(ff.x.results);

  return y; // or return ff.x;
};
