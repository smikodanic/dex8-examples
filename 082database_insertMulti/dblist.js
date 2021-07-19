// list docs to mongodb collection
module.exports = async (x, lib) => {
  const mongo = lib.mongo;
  const echo = lib.echo;

  const moQuery = {
    url: 'http://added.com'
  };

  x.listedDocs = await mongo.list(moQuery, 100, 0, '-created_at', '');

  await echo.objekt(x.listedDocs);

  return x;
};
