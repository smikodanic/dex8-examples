// connect to mongodb server and compile model
module.exports = async (x, lib) => {
  const mongo = lib.mongo;
  const mo_uri = x.mo_uri;
  const collection = x.mo_collection;

  await mongo.connect(mo_uri); // connect to mongodb server
  mongo.compileModel(collection); // compile model

  return x;
};
