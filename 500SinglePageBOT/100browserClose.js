module.exports = async (x, lib) => {
  lib.ff.delay(1300);
  lib.browser.close();
  return x;
};
