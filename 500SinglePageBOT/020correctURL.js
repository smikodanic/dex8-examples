module.exports = (x, lib) => {
  if (!x.url) {throw new Error('URL is not defined'); }

  // 1. trim from left and right
  x.url = x.url.trim();

  // 2. add protocol
  if (!/^https?:\/\//.test(x.url)) {
    x.url = 'http://' + x.url;
  }

  // 3. remove empty spaces
  if (x.encodeURL) {
    x.url = encodeURI(x.url);
  } else {
    x.url = x.url.replace(/\s+/g, ' ');
    x.url = x.url.replace(/ /g, '%20');
  }

  return x;
};
