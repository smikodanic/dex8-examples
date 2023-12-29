const SKRIPT = '002input_secret';

const input = require(`./${SKRIPT}/input.json`);
const mainBundle = require(`./${SKRIPT}/dist/mainBundle.js`);

mainBundle(input, {});