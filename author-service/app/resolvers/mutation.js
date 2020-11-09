async function addAuthor(parent, { input }, { dataSources }, info) {
  const { mongo } = dataSources;
  const response = await mongo.addAuthor(input);
  return response;
}

module.exports = {
  addAuthor,
};
