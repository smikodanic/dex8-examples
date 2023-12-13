const Echo = require('@mikosoft/echo');


module.exports = async (input, library) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = library.eventEmitter;

  const echo = new Echo(true, 10, eventEmitter);

  echo.log('   a = ', input.a);
  echo.log('LEVEL 1 --- password: ', input.password);
  echo.log('LEVEL 1 ---  password_1: ', input.password_1);
  echo.log('LEVEL 1 ---  MyPAssword_1: ', input.MyPAssword_1, input.PasswordNotExists);
  echo.log('PasswordNotExists: ', input.PasswordNotExists);
  echo.log();
  echo.log('LEVEL 2 --- company.comp_password:', input.company.comp_password);
  echo.log();
  echo.log('LEVEL 3 --- company.employer1.emp1_password:', input.company.employer1.emp1_password);

  return input;
};
