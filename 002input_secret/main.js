const Echo = require('@mikosoft/echo');


module.exports = async (input, inputSecret) => {
  if (!input) { throw new Error('Input is required.'); }

  const eventEmitter = global.dex8.eventEmitter;
  const echo = new Echo(true, 10, eventEmitter);

  echo.log('--- input.json ---');
  echo.log('   a = ', input.a);
  echo.log();
  echo.log('--- inputSecret.json ---');
  echo.log('password: ', inputSecret.password);
  echo.log('company.comp_password:', inputSecret.company.comp_password);
  echo.log('company.employer1.emp1_password:', inputSecret.company.employer1.emp1_password);
  echo.log('passwordNotExists: ', inputSecret.passwordNotExists);

  return input;
};
