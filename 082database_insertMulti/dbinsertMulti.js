// insert docs into mongodb collection
module.exports = async (x, lib) => {
  const mongo = lib.mongo;
  const echo = lib.echo;

  const docs = [
    {
      url: 'http://added1 .com',
      text: 'Lorem ipsum 1',
      depth: 1
    },
    {
      url: 'http://added2.com',
      text: 'Lorem ipsum 2',
      depth: 2
    },
    {
      url: 'http://added3.com',
      text: 'Lorem ipsum 3',
      depth: 3
    }
  ];

  x.addedDoc = await mongo.insertMulti(docs);

  await echo.log('Docs are added.');
  await echo.objekt(x.addedDoc);

  return x;
};
