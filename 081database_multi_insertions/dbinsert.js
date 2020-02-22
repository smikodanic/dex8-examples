// insert doc to mongodb collection
module.exports = async (x, lib) => {
  const mongo = lib.mongo;
  const echo = lib.echo;

  const doc = {
    url: 'http://added.com',
    text: 'Lorem ipsum',
    depth: 123
  };

  x.addedDoc = await mongo.add(doc);

  echo.log('Doc is added.');
  echo.objekt(x.addedDoc);

  return x;
};
