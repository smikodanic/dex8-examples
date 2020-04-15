const cheerio = require('cheerio');

module.exports = async (x, lib) => {
  const html = await lib.page.content();
  // const html2 = await lib.page.evaluate(() => document.body.innerHTML);

  const $ = cheerio.load(html);

  const elements = $(x.extract.selector);

  // extract data
  const extractedData = [];

  elements.each(function(ind) {
    if (x.extract.tip == 'text') {
      const txt = $(this).text();
      extractedData.push(txt);
      // console.log(ind, '. txt-->', txt);
    } else if (x.extract.tip == 'html') {
      const htm = $(this).html();
      extractedData.push(htm);
      // console.log(ind, '. htm-->', htm);
    } else if (x.extract.tip == 'attr') {
      const atr = $(this).attr(x.extract.attribute);
      extractedData.push(atr);
      // console.log(ind, '. atr-->', atr);
    }

  });

  lib.echo.log('   +++ Data extracted.');

  x.results = extractedData;

  return x;

};
