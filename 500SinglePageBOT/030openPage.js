module.exports = async (x, lib) => {
  await lib.page.goto(x.url);
  lib.echo.log(`Page ${x.url} is opened.`);
  return x;
};
