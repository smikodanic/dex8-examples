module.exports = {
  url: 'google.com/search?q=site%3A.hr',
  encodeURL: false,  // encode URL before web page is opened

  extract: {
    tip: 'attr', // text, html, attr
    selector: 'a', // CSS selector
    attribute: 'href' // use only when tip is 'attr'
  },

  // filter extracted data by regular expression
  filter: {
    reg_str: '\\.hr\\/?$', // regex string
    reg_flags: 'i' // regex flags
  },

  corrector: (result) => {
    result = result.trim();
    result = result.replace('\n', '');
    result = result.replace(/\/$/, '');
    return result;
  },

  results: [],
  results_count: 0
};
