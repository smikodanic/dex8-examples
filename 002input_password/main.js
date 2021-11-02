module.exports = async (input, lib) => {
  if (!input) { throw new Error('Input is required.'); }

  const ff = lib.ff;
  const echo = lib.echo;

  await echo.log('   a = ', input.a);

  await ff.delay(1300);
  
  await echo.log('LEVEL 1 --- password: ', input.password);
  await echo.log('LEVEL 1 ---  password_1: ', input.password_1);
  await echo.log('LEVEL 1 ---  MyPAssword_1: ',  input.MyPAssword_1, input.PasswordNotExists);
  await echo.log('PasswordNotExists: ',  input.PasswordNotExists);
  await echo.log();
  await echo.log('LEVEL 2 --- company.comp_password:', input.company.comp_password);
  await echo.log();
  await echo.log('LEVEL 3 --- company.employer1.emp1_password:', input.company.employer1.emp1_password);
  
  await ff.delay(3400);

  return input;
};
