const fs = require('node:fs/promises');

const TASK = '002input_secret';

const func = async () => {
    const input_str = await fs.readFile(`./${TASK}/input.json`, { encoding: 'utf8' });
    const mainBundle_str = await fs.readFile(`./${TASK}/dist/mainBundle.js`, { encoding: 'utf8' });

    const input = JSON.parse(input_str);

    await fs.writeFile('./temp.js', mainBundle_str, { encoding: 'utf8' });

    const temp = require('./temp.js');
    fs.unlink('./temp.js');
    temp(input);
};




func().catch(console.log);
