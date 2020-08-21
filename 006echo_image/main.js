module.exports = async (input, lib) => {
  const ff = lib.ff;
  const echo = lib.echo;
  // echo.short = true;

  if (!input) {throw new Error('Select input file.');}

  // echo image
  const img_b64 = input.img_b64;
  echo.image(img_b64);


  return;
};
