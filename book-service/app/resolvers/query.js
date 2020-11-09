async function books(parent, args, { dataSources }) {
  const { mongo } = dataSources;
  const bookArr = await mongo.getBooks();
  return bookArr;
}

async function book(parent, { id }, { dataSources }) {
  const { mongo } = dataSources;
  const oneBook = await mongo.getBook(id);
  return oneBook;
}

async function authors(parent, args, { dataSources }) {
  const { mongo } = dataSources;
  const bookArr = await mongo.getAuthors();
  return bookArr;
}

module.exports = {
  books,
  book,
  authors,
};
