const { logger } = require('winston');
const Author = require('../datasources/mongo/models/Author');

async function author(book, args, { loaders }) {
  const { author } = book;
  const { authorLoader } = loaders;
  console.log('author resolver =>', { author });
  // const oneAuthor = await Author.findById(author).lean();
  const oneAuthor = await authorLoader.load(author.toString());
  return {
    ...oneAuthor,
    id: oneAuthor._id,
  };
}

module.exports = {
  author,
};
