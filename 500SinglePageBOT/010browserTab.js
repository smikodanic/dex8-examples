/**
 * Open browser tab.
 */
const sysconfig = require('./sysconfig.js');

module.exports = async (x, lib) => {
  const ff = lib.ff;

  const browser = await lib.puppeteer.launch(sysconfig.puppeteer);
  const page = await browser.newPage();
  page.emulate(sysconfig.device);
  await page.bringToFront();
  await page.setViewport({width: sysconfig.viewport.width, height: sysconfig.viewport.height});

  ff.libAdd({browser, page});
  return x;
};
