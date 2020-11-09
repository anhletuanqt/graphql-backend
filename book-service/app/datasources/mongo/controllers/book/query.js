const _ = require('lodash');
const Book = require('../../models/Book');

async function getBooks() {
  const books = await Book.find({})
    .lean();

  return _.map(books, x => ({ ...x, id: x._id }));
}

async function getBook(id) {
  const book = await Book.findById(id)
    .populate([
      {
        path: 'author',
      },
    ])
    .lean();

  const { author } = book || {};
  return {
    ...book,
    id: book._id,
    author: {
      ...author,
      id: author._id,
    },
  };
}

module.exports = {
  getBooks,
  getBook,
};
