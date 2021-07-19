module.exports = async (input, lib) => {
  if (!input) { throw new Error('Input is required.'); }

  const ff = lib.ff;
  const echo = lib.echo;
  // echo.short = true;

  await ff.delayRnd(2100, 3400);

  // echo image
  const img_b64 = input.img_b64;
  await echo.image(img_b64);

  return;
};
