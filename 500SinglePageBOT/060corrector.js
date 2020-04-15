module.exports = async (x, lib) => {
  x.results = x.results.map(result => {
    return x.corrector(result);
  });
  return x;
};
