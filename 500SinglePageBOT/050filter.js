module.exports = async (x, lib) => {
  x.results = x.results.filter(result => {
    const reg = new RegExp(x.filter.reg_str, x.filter.reg_flags);
    const tf = reg.test(result);
    // lib.echo.log(tf, result);
    return tf;
  });
  return x;
};
