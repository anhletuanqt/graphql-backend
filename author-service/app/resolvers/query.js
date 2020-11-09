async function authors(parent, args, { dataSources }) {
  const { mongo } = dataSources;
  const bookArr = await mongo.getAuthors();
  return bookArr;
}

module.exports = {
  authors,
};
