const Echoer = require('echoer');
const { EventEmitter } = require('events');


module.exports = async (input) => {
  if (!input) { throw new Error('Input is required.'); }

  // create event emitter
  const eventEmitter = new EventEmitter();
  eventEmitter.setMaxListeners(5); // 10 by default

  const echoer = new Echoer(true, 10, eventEmitter);

  echoer.log('   a = ', input.a);
  echoer.log('LEVEL 1 --- password: ', input.password);
  echoer.log('LEVEL 1 ---  password_1: ', input.password_1);
  echoer.log('LEVEL 1 ---  MyPAssword_1: ', input.MyPAssword_1, input.PasswordNotExists);
  echoer.log('PasswordNotExists: ', input.PasswordNotExists);
  echoer.log();
  echoer.log('LEVEL 2 --- company.comp_password:', input.company.comp_password);
  echoer.log();
  echoer.log('LEVEL 3 --- company.employer1.emp1_password:', input.company.employer1.emp1_password);

  return input;
};
