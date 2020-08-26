module.exports = async (input, lib) => {
  if (!input) {throw new Error('Select input file.');}

  const ff = lib.ff;
  const echo = lib.echo;
  // echo.short = true;


  // echo image
  const img_b64 = input.captcha_img;
  echo.image(img_b64);

  // listen from the Web Panel or Console input
  echo.input('Enter captcha:');

  const msg = await echo.listen();

  if (msg === 'V4XBG') {
    echo.log(`Recived input: ${msg} . Captcha is solved !`);
  } else {
    echo.log(`Recived input: ${msg} . Captcha is not solved !`);
  }


  return input;
};
