const fs = require('node:fs/promises');

const SKRIPT = 'crawlerSinglePage';

const func = async () => {
    const input_str = await fs.readFile(`./${SKRIPT}/input.json`, { encoding: 'utf8' });
    const mainBundle_str = await fs.readFile(`./${SKRIPT}/dist/mainBundle.js`, { encoding: 'utf8' });

    const input = JSON.parse(input_str);

    eval(mainBundle_str);
    const mainBundle = module.exports;

    mainBundle(input, {});
};




func().catch(console.log);
