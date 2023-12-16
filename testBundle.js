const TASK = '002input_secret';

const input = require(`./${TASK}/input.json`);
const mainBundle = require(`./${TASK}/dist/mainBundle.js`);

mainBundle(input, {});