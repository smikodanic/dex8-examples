// connect to mongodb server and compile model
module.exports = async (x, lib) => {
  const mongo = lib.mongo;

  await mongo.disconnect(); // disconnect from mongodb server

  return x;
};
